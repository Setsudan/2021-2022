from random import randint
from combat_player import *
from combat_boss import *


def bigmap():
    map = [
        ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
        ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
        ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
        ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
        ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
        ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
        ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
        ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"],
        ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[💀]", "[ ]"],
        ["[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]", "[ ]"], ]

    # Spawn du joueur sur la map
    map[0][0] = "👀"

    # Première apparition de la map
    for i in map:
        print(i)

    # Déplacement
    x = 0
    y = 0
    where = 0
    while where != "quit" and joueur.pv > 0:
        change_place = "yes"
        actu_map = True
        something_happend = "yes"
        # Demande au joueur quoi faire
        print("====================")
        print("Quitter la partie [quit]")
        print("Regardez votre [inventaire]")
        where = input("Ou déplacez vous : [z],[q],[s],[d] : ")
        if where != "quit" and where != "z" and where != "q" and where != "s" and where != "d" and where != "inventaire":
            print("====================")
            print("Choix non compris !")
            actu_map = "no"
            something_happend = "no"
        # Joueur choisis INVENTAIRE
        if where == "quit":
            actu_map = "no"
            something_happend = "no"
            print("=====================")
            print("A bientot aventurier!")
        elif where == "inventaire":
            print("====================")
            print("Vous êtes lvl :", joueur.lvl)
            print("Inventaire : ", joueur.inventory)
            navigate_inv = "yes"
            while navigate_inv != "exit":
                print("[exit] pour quitter.")
                navigate_inv = input("[Nom de l'objet] pour l'utiliser : ")
                if navigate_inv == "exit":
                    actu_map = "no"
                    something_happend = "no"
                elif navigate_inv == leather_armor.name:
                    if leather_armor.name in joueur.inventory:
                        get_armor(leather_armor)
                    else:
                        print("Vous n'avez pas cette armure!")
                elif navigate_inv == iron_armor.name:
                    if iron_armor.name in joueur.inventory:
                        get_armor(iron_armor)
                    else:
                        print("Vous n'avez pas cette armure!")
                elif navigate_inv == holy_armor.name:
                    if holy_armor.name in joueur.inventory:
                        get_armor(holy_armor)
                    else:
                        print("Vous n'avez pas cette armure!")
                elif navigate_inv == wood_weapon.name:
                    if wood_weapon.name in joueur.inventory:
                        get_weapon(wood_weapon)
                    else:
                        print("Vous n'avez pas cette arme!")
                elif navigate_inv == stone_weapon.name:
                    if stone_weapon.name in joueur.inventory:
                        get_weapon(stone_weapon)
                    else:
                        print("Vous n'avez pas cette arme!")
                elif navigate_inv == iron_weapon.name:
                    if iron_weapon.name in joueur.inventory:
                        get_weapon(iron_weapon)
                    else:
                        print("Vous n'avez pas cette arme!")
                elif navigate_inv == excalibur.name:
                    if excalibur.name in joueur.inventory:
                        get_weapon(excalibur)
                    else:
                        print("Vous n'avez pas cette arme!")

        ################# Touche Pour Se Déplacer ###################
        # Haut
        elif where == "z":
            if map[x-1][y] == "[💀]":
                combat_boss(boss1)
                something_happend = "no"
                change_place = "no"
            elif x-1 == -1:
                print("Impossible vous allez tomber dans le vide!")
                something_happend = "no"
            else:
                if change_place == "yes":
                    map[x][y] = "[ ]"
                    x -= 1
                    map[x][y] = "👀"
        # Bas
        elif where == "s":
            if map[x+1][y] == "[💀]":
                combat_boss(boss1)
                something_happend = "no"
                change_place = "no"
            elif x+1 == 10:
                print("Impossible vous allez tomber dans le vide!")
                something_happend = "no"
            else:
                if change_place == "yes":
                    map[x][y] = "[ ]"
                    x += 1
                    map[x][y] = "👀"
        # Droite
        elif where == "d":
            if map[x][y+1] == "[💀]":
                combat_boss(boss1)
                something_happend = "no"
                change_place = "no"
            elif y+1 == 10:
                print("Impossible vous allez tomber dans le vide!")
                something_happend = "no"
            else:
                if change_place == "yes":
                    map[x][y] = "[ ]"
                    y += 1
                    map[x][y] = "👀"
        # Gauche
        elif where == "q":
            if map[x][y-1] == "[💀]":
                combat_boss(boss1)
                something_happend = "no"
                change_place = "no"
            if y-1 == -1:
                print("Impossible vous allez tomber dans le vide!")
                something_happend = "no"
            else:
                if change_place == "yes":
                    map[x][y] = "[ ]"
                    y -= 1
                    map[x][y] = "👀"
        ######### Actualise la map à chaque fois ########
        if actu_map:
            for i in map:
                print(i)
        ############## Choix Random ( COMBAT, Trouver ARME/ARMURE ETC ###############
        if something_happend == "yes":
            what_happend = randint(1, 10)
            # Lance un combat aléatoirement (3 chances /10)
            if what_happend >= 8:
                combat(random_mob())
            # Trouve une armure (1 chance /10)
            elif what_happend >= 7:
                a = randint(1, 100)
                if a >= 65:
                    print("Vous avez trouvé une armure en Cuir !")
                    if leather_armor.name not in joueur.inventory:
                        joueur.inventory.append(leather_armor.name)
                    else:
                        print("Mais vous l'avez déjà dans votre inventaire!")
                elif a >= 5:
                    print("Vous avez trouvé une armure en Fer!")
                    if iron_armor.name not in joueur.inventory:
                        joueur.inventory.append(iron_armor.name)
                    else:
                        print("Mais vous l'avez déjà dans votre inventaire!")
                elif a >= 1:
                    print("Vous avez trouvé l'armure des Dieux!")
                    if holy_armor.name not in joueur.inventory:
                        joueur.inventory.append(holy_armor.name)
                    else:
                        print("Mais vous l'avez déjà dans votre inventaire!")
            # Trouve une arme (1 chance /10)
            elif what_happend >= 6:
                r = randint(1, 100)
                if r >= 50:
                    print("Vous avez trouvé une Arme En Bois!")
                    if wood_weapon.name not in joueur.inventory:
                        joueur.inventory.append(wood_weapon.name)
                    else:
                        print("Mais vous l'avez déjà dans votre inventaire!")
                elif r >= 25:
                    print("Vous avez trouvé une Arme En Pierre!")
                    if stone_weapon.name not in joueur.inventory:
                        joueur.inventory.append(stone_weapon.name)
                    else:
                        print("Mais vous l'avez déjà dans votre inventaire!")
                elif r >= 3:
                    print("Vous avez trouvé une Arme En Fer!")
                    if iron_weapon.name not in joueur.inventory:
                        joueur.inventory.append(iron_weapon.name)
                    else:
                        print("Mais vous l'avez déjà dans votre inventaire!")
                elif r > 0:
                    print("Vous avez trouvé EXCALIBUR !!!!!!!!!!!!")
                    if excalibur.name not in joueur.inventory:
                        joueur.inventory.append(excalibur.name)
                    else:
                        print("Mais vous l'avez déjà dans votre inventaire!")
            # Trouve une potion (2 chances /10)
            elif what_happend >= 4:
                print("Vous avez trouvé une potion de vie !")
                joueur.inventory.append("potion")
                print(joueur.inventory)
            else:
                print("Rien ne se passe.")


joueur.inventory.append(excalibur.name)
bigmap()
