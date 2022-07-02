from time import sleep
from .textAnimation import print_ligne,sep
from .prologue_Panel import pro
#! ce fichier contient le début du jeux, soit l'interaction avec la mamie
def Spawn_Panel(name):
    line_1 = "Vous vous réveiller sur la première ile aussi appelé l'ile du miracle.Le nom de cette iles est du à l'absence des monstre sur cet île.Cependant,"
    line_2 = "après vous être fait réveillé par un chien \n, une mamie nous interpelle et nous dis que nous devons nous cacher car un monstre un mutant se dirige vers notre direction. \n"
    line_3 = "confus ",name," demande à la personne agé son nom et qui est elle. \n"
    line_4="Mamie: je suis l'amie de votre mère disparu,je vous hébèrge depuis votre sommeil de la génèse,la maladie qui plongea une partie de la population dans un sommeil profond \n"
    line_5="Vous fuyez avec la mamie vers un lieu sur. \n"
    line_6="Une fois mis à l'abrit la mamie nous explique ce qu'il s'est passé pendant notre long sommeil qui dura 11 ans \n"
    
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
    print("\n")
    sep()
    print("Découverte du lieu: grange de la vielle gourou")
    sep()
    print("\n")
    sleep(0.5)
    print_ligne(line_6)
    pro(name)