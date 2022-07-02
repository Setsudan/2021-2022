from time import sleep
from .textAnimation import print_ligne
from .textAnimation import sep
#! Code qui affiche le prologue soit l'explication de la situation
def pro(name):
    sep()
    line_1 = "Cela va bientôt faire 11 ans que la Terre a été décimée par une guerre nucléaire. \n"
    line_2 = "La fameuse planète bleue que nous avions connue est maintenant séparé en 7 îles, 7 paysages totalement différent. \n"
    line_3 = "Toutes tournent autour du noyau mystérieux émettant une lumière vive. Chaque île contient son propre univers hostile et terriblement dangereux.\n"
    line_4 = "Toutes, hormis une une seule, où les survivants, peu nombreux se sont rassemblés pour y survivre.\n"
    line_5 = "Ils l’appellent, l’île du miracle, car on y trouve aucun mutant, aucun danger et une terre fertile.\n"
    line_5 = "Les survivants ont d’ailleurs fait une découverte des plus étranges : les Ponéglyphes.\n"
    line_6= "Beaucoup de jeune de nos jours rêve de partir à l'aventure découvrir les secrets du monde je suppose que vous ferez de même \n"
    line_7 = "L’aventure ne sera pas de tout repos, préparez vous "
    print_ligne(line_1)
    sleep(0.5)
    print_ligne(line_2)
    sleep(0.5)
    print_ligne(line_3)
    sleep(0.5)
    print_ligne(line_4)
    sleep(0.5)
    print_ligne(line_5)
    sleep(0.5)
    print_ligne(line_6)
    sleep(0.5)
    print_ligne(line_7)
    sleep(0.5)
    print(name)