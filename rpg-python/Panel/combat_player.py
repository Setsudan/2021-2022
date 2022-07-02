from random import randint
from ..Panel.game_Panel import name_player


def Game_Over():
    player_alive = False
    return player_alive

# Classe du personnage principal


class Npc:
    def __init__(self, name, pv_max, pv, attack, weapon, inventory, armor, experience, lvl):
        self.name = name
        self.pv_max = pv_max
        self.pv = pv
        self.attack = attack
        self.weapon = weapon
        self.inventory = inventory
        self.armor = armor
        self.experience = experience
        self.lvl = lvl
# Classe des mobs


class Monster:
    def __init__(self, name, pv_max, pv, attack, give_exp):
        self.name = name
        self.pv_max = pv_max
        self.pv = pv
        self.attack = attack
        self.give_exp = give_exp

################################
### Création armes + armures ###
################################


class Weapon:
    def __init__(self, name, damage):
        self.name = name
        self.damage = damage


class Armor:
    def __init__(self, name, deff):
        self.name = name
        self.deff = deff


#######################
### Début du joueur ###
#######################
joueur = Npc(name_player, 20, 20, 1, None, [], 0, 0, 1)
print("Bienvenu", joueur.name, "vous avez", joueur.pv,
      "pv et", joueur.attack, "points d'attaques.")


##################
### Experience ###
##################
experience = 0
# Fonction qui augmente le level du joueur par rapport à l'exp qu'il gagne


def lvl_up(exp, lvl):
    if (exp//(10*lvl)) != 0:
        joueur.lvl += (exp//(10*lvl))
        print("Vous êtes maintenant niveau : ", joueur.lvl)
    else:
        print("Vous êtes toujours lvl : ", joueur.lvl)
    return joueur.lvl


##############
### Potion ###
##############
potion = 10
joueur.inventory.append("potion")
joueur.inventory.append("potion")

############################################
######## Apparition armes + armures ########
############################################
stick = Weapon("Bâton en bois", 1)
wood_weapon = Weapon("Epée en bois", 5)
stone_weapon = Weapon("Epée en pierre", 7)
iron_weapon = Weapon("Epée en fer", 12)
excalibur = Weapon("Excalibur", 1000)

leather_armor = Armor("Armure en cuir", 2)
iron_armor = Armor("Armure de fer", 15)
holy_armor = Armor("Armure des Dieux", 1000)

# ajout des dégats de l'arme à l'attaque du joueur


def get_weapon(weapon):
    joueur.attack = 1
    joueur.attack = weapon.damage
    print("Vous avez maintenant", joueur.attack,
          "dégats d'attaque grâce à", weapon.name, "!")

# ajout de l'armure a l'armor de base du joueur


def get_armor(armor):
    joueur.armor = 0
    joueur.armor += armor.deff
    print("vous avez maintenant", joueur.armor,
          "armor bonus grâce à", armor.name, "!")


###########################
### Apparition des mobs ###
###########################
dog = Monster("Chien érant", 5, 5, 1, 10)
serpent = Monster("Serpent", 5, 5, 2, 12)
spider = Monster("Araignée géante", 7, 7, 3, 15)
human_mutant = Monster("Humain Mutant", 10,  10, 4, 15)
loup_enrage = Monster("Loup Enragé", 15, 15, 4, 20)
aigle_mutant = Monster("Aigle Mutant", 15, 15, 4, 20)
ver_geant = Monster("Ver Géant", 25, 25, 6, 28)
mille_patte_geant = Monster("Mille-Pattes Géant", 30, 30, 7, 50)
iron_golem = Monster("Golem de fer", 70, 70, 7, 70)
baby_drake = Monster("Bébé Dragon", 100, 100, 18, 100)

# Fonction combat


def combat(ennemi):
    print("===================================")
    print("Un", ennemi.name, "est dans la zone! Il a",
          ennemi.pv, "pv et", ennemi.attack, "d'attaques!")
    # choix combattre ou éviter
    do_what = input("Voulez vous le [combattre] ou l'[éviter]? ")
    while do_what != "combattre" and do_what != "éviter":
        do_what = input("Voulez vous le [combattre] ou l'[éviter]? ")
    if do_what == "combattre":
        do_what_combat = None
        while ennemi.pv > 0 and joueur.pv > 0 and do_what_combat != "fuir":
            print("===================================")
            ### Choix Attaque ou Soin ###
            do_what_combat = input("[attaquer],[soin],[fuir] : ")
            while do_what_combat != "attaquer" and do_what_combat != "soin" and do_what_combat != "fuir":
                do_what_combat = input("[attaquer],[soin],[fuir]")
            ### Choix du soin ###
            if do_what_combat == "soin":
                if "potion" not in joueur.inventory:
                    print("Vous n'avez pas de potion")
                    ennemi_turn = False
                else:
                    if joueur.pv + potion > joueur.pv_max:
                        joueur.pv = joueur.pv_max
                        joueur.inventory.remove("potion")
                        print("Vous vous êtes soignez, avez maintenant",
                              joueur.pv, "pv!")
                        ennemi_turn = True
                    else:
                        joueur.pv += potion
                        joueur.inventory.remove("potion")
                        print("Vous vous êtes soignez, avez maintenant",
                              joueur.pv, "pv!")
                        ennemi_turn = True

            ### Choix d'attaquer ###
            elif do_what_combat == "attaquer":
                ### One shot ###
                if joueur.attack > ennemi.pv:
                    ennemi.pv = 0
                    print("Wow! Joli coup! Vous avez reussis à tuer",
                          ennemi.name, "!")
                    joueur.experience += ennemi.give_exp
                    print("Vous avez gagné", ennemi.give_exp, "d'xp!")
                    lvl_up(joueur.experience, joueur.lvl)
                    ennemi_turn = False
                else:
                    ennemi.pv -= joueur.attack
                    print("Vous avez infligé", joueur.attack, "point de dégat à",
                          ennemi.name, ". Il lui reste", ennemi.pv, "pv!")
                    ennemi_turn = True
                    if ennemi.pv == 0:
                        print("Wow! Joli coup! Vous avez reussis à tuer",
                              ennemi.name, "!")
                        joueur.experience += ennemi.give_exp
                        print("Vous avez gagné", ennemi.give_exp, "d'xp!")
                        lvl_up(joueur.experience, joueur.lvl)

            elif do_what_combat == "fuir":
                print(
                    "Vous prenez vos jambes à votre cou et courrez comme une petite gazelle !!!!")
                ennemi.pv = ennemi.pv_max
                break
            ##########################
            ### Ennemi qui attaque ###
            ##########################
            if ennemi_turn == True:
                ### Finish Him ###
                if ennemi.attack > joueur.pv+joueur.armor:
                    print(ennemi.name, "vous a infligé un coup fatal de",
                          ennemi.attack, "dégats!")
                    joueur.pv = 0
                    print(ennemi.name, "vous as tué! Adieu", joueur.name, "...")
                    Game_Over()
                ### Attaque ###
                elif ennemi.pv > 0:
                    if joueur.armor > ennemi.attack:
                        print(
                            ennemi.name, "ne vous a infligé aucun dégats grâce à votre armure!")
                    else:
                        joueur.pv -= (ennemi.attack-joueur.armor)
                        print(ennemi.name, "vous attaque! Il vous a infligé",
                              ennemi.attack, "dégats! Il vous reste", joueur.pv, "pv!")
                        if joueur.pv <= 0:
                            print("Vous êtes mort au combat...",
                                  ennemi.name, "vous as tué!")
                            print("Adieu", name_player, ".")
                            Game_Over()
    else:
        print("Vous contournez", ennemi.name, "en tout discrétion...")

    if ennemi.pv <= 0:
        ennemi.pv = ennemi.pv_max


def random_mob():
    r = randint(1, 100)
    if r >= 85:
        return serpent
    if r >= 71:
        return spider
    if r >= 57:
        return human_mutant
    if r >= 42:
        return loup_enrage
    if r >= 27:
        return aigle_mutant
    if r >= 17:
        return ver_geant
    if r >= 7:
        return mille_patte_geant
    if r >= 2:
        return iron_golem
    if r == 1:
        return baby_drake
