# soupify.py
# (C) Brendan J. Herger
# Analytics Master's Candidate at University of San Francisco
# 13herger@gmail.com
#
# Available under MIT License
# http://opensource.org/licenses/MIT
#
# *********************************
__author__ = 'bjherger'

# imports
############################################
import bhUtilties

import bs4
import urllib2

import sys
# sys.stdout = open('output.txt', 'w')

#variables
############################################

QUESTION_LOOKUP = {
    "Past Month Tobacco Product Use<sup>5</sup>": "Tobacco",
    "Past Month Alcohol Use": "Alcohol",
    "Past Month Marijuana Use": "Marijuana",
    "Past Month Illicit Drug Use<sup>1</sup>": "Illicit Drugs"
}

delim = ", "


# functions
############################################

def getSoup(url):
    urlFile = urllib2.urlopen(url).read()
    return bs4.BeautifulSoup(urlFile)


def scrapeTable(tableSoup):
    """
    Assumes tableSoup header (th) leading each row.
    Returns a dictionary, of the form { question : list of values }
    :param tableSoup:
    :return: a dictionary, of the form { question : list of values }
    """
    toReturn = {}

    # get all tableSoup rows
    tableEntries = tableSoup.findAll("tr")

    # and iterate through tableSoup rows
    for (index, row) in enumerate(tableEntries):

        # find out if we have an actual row
        question = row.findAll("th")
        if question and len(question) == 1:
            #header rows have more than one question
            question = question[0].renderContents()
            # print question
            # print question

            # add all row data to dict
            row = [entry.renderContents() for entry in row.findAll("td", text=True)]
            toReturn[question] = row
            # toReturn[index] = row
    return toReturn


def buildDictionary(soup):
    sections = soup.find_all("div", {"class": "rti_herald"})
    stateQuesetionValueDic = {}

    #get each state
    for section in sections:
        caption = section.find("caption").renderContents()

        #remove the gross total tables
        if "Percentages" in caption:

            #highly specific to this project
            state = section.find("h3").renderContents()
            if (bhUtilties.STATES.has_key(state)):
                state = bhUtilties.STATES[state]
            # get table
            tableSoup = section.find("table")
            table = scrapeTable(tableSoup)

            #add to dictionary
            stateQuesetionValueDic[state] = table

    # return dictionary
    return stateQuesetionValueDic
    print len(sections)


def writeDicToCSV(dic, questionList, filename, delim=","):
    """
    Writes the dic to csv. It is assumed that the dic is of form { classifier : { word : count } }
    The csv contains the parameters class, word, count, probability
    :param dic: dictionary to be written to file
    :param classList: list of classes to be written
    :return: null. The output of this function is a side effect .csv file
    """
    dic = dict(dic)
    file = open(filename, 'w')
    header = "State" + delim + "age" + delim +"pastMonth"+delim+ "drugType"+ "\n"
    file.write(header)
    for (state, lookupDic) in dic.iteritems():
        lookupDic = dict(lookupDic)
        rowList = []
        rowList.append(state)
        for question in questionList:
            if lookupDic.has_key(question):
                labels = ["12+", "12-17", "18-25", "26+", "18+"]
                combined = zip(labels, lookupDic[question])
                for (label, result) in combined:
                    questionShort = QUESTION_LOOKUP.get(question, "NA")
                    string = delim.join([state, label, result, questionShort]) + "\n"
                    file.writelines(string)
                    # else:
                    # rowList.append(", ")
                    # string = delim.join(rowList) + "\n"
                    # file.write(string)
    file.close()

#main
############################################

if __name__ == "__main__":
    print "Begin Main"
    # url = "/Users/bjherger/Developer/pot/python/article.html"
    url = "http://www.samhsa.gov/data/NSDUH/2k12State/NSDUHsae2012/NSDUHsaeStateTabs2012.htm"
    soup = getSoup(url)
    dic = buildDictionary(soup)

    # questionList = ["Past Month Marijuana Use"]
    questionList = QUESTION_LOOKUP.keys()

    writeDicToCSV(dic, questionList, "output.csv")

    print "\nEnd Main"
