import sys
from time import sleep
#! Ce fichier permet d'animer le texte et donne un séparateur pour ne pas avoir que du texte.


def print_ligne(txt):
    for x in txt:
        print(x, end='')
        sys.stdout.flush()
        sleep(0.02)


def sep():
    print("-------------------------")
