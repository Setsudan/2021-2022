from .textAnimation import sep
from .game_Panel import start_game
#! Menu de démarrage


def Game_Init():
    gameName = "[A definir]"
    print("Bienvenue sur ", gameName, "\n")
    print("> Créer une game")
    print("> Partie Rapide")
    print("> Charger une sauvegarde")
    print("> Controles")
    print("> Quitter le jeu")
    mode = input('Que voulez vous faire ? ')
    print('\n')
    if(mode == "créer une game" or mode == "creer une game"):
        # ? Lance la classe ou la fonction pour start une game
        sep()
        print("Création d'une game...")
        player_alive = True
        name_player = input("Quel est ton nom jeune aventurier ?\n")
        start_game(name_player)
    elif(mode == "partie rapide" or mode == "qs"):
        # TODO Lance une partie rapide avec un nom random etc
        sep()
        print("Link Start")
        player_alive = True
        name_player = "Poulain"
        start_game(name_player)
    elif(mode == "charger une game" or mode == "load game"):
        # TODO Montre une liste des parties sauvegarder
        print("Liste des sauvegarde")
        load_save = int(input("Quel N° partie voulez vous charger ?"))
    elif(mode == "controles" or mode == "controls"):
        # TODO: A compléter
        print("Voici les différents controles: \n")
        print("Movement", "w", "a", "s", "d")
        print("Inventaire: ", "i")
        print("\n")
        Game_Init()
        return
    elif(mode == "quitter" or mode == "quit"):
        # * Quitte le program
        print("à la prochaine")
        exit()
