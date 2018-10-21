from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from time import sleep
import sys
import re

'''Command to disable all notifications'''

options = Options()
options.add_argument("--disable-notifications")


'''Command to open chrome web driver and opening the web page specified through the url'''

driver = webdriver.Chrome(r"C:\Users\Vishal\Downloads\chromedriver_win32\chromedriver.exe",chrome_options=options)


list_ = ['android apps','iOS apps']

link = 'https://api.github.com/search/repositories?q=topic:'

file = open("urls.txt" , "w+", encoding="utf8")
file1= open("descr.txt" , "w+", encoding="utf8")

non_bmp_map = dict.fromkeys(range(0x10000, sys.maxunicode + 1), 0xfffd)
c=0

for site in list_:
    url = link+site
    driver.get(url)
    sleep(1)

    path="html/body/pre[@style='word-wrap: break-word; white-space: pre-wrap;']"
    full_text=driver.find_elements_by_xpath(path)
    
    texts = full_text[0].text
    texts = texts.replace('{','')
    texts = texts.replace('}','')
    texts = texts.replace('[','')
    texts = texts.replace(']','')

    items = texts.split(',')
    for item in items:
        sets = item.split('":"')
        #print(sets.translate(non_bmp_map))
        sets[0]=re.sub('["" \\n]','',sets[0])
        #sets[1]=re.sub('[""]','',sets[1])

        rev = sets[0].strip().translate(non_bmp_map)
        list1 = [s.strip() for s in rev.splitlines()]

        for each in list1:
            if 'html_url' in each:
                print(each[each.index(':')+1:])
                file.write(each[each.index(':')+1:])
                file.write('\n')
                c=c+1
                
print(c)                
file.close()
file1.close()
