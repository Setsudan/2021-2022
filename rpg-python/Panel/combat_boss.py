from combat_player import *
#creation boss
class BOSS():
    def __init__(self, name, pv_max, pv, attack, give_exp):
        self.name = name
        self.pv_max = pv_max
        self.pv = pv
        self.attack = attack
        self.give_exp = give_exp

boss1 = BOSS("Pieuvre Araignée Mutante",400, 400, 20, 600)
        
def combat_boss(boss):
    print("===================================")
    print(name_player,": Voici le boss de cette île! Qu'est ce qu'il est hideux!")
    print("C'est une",boss.name,"... Elle as",boss.pv,"pv et",boss.attack,"d'attaques!")
    print(name_player,": Merde il à l'air balèse...")
    print(name_player,": Si je m'engage à faire le combat je ne pourrais plus faire marche arrière, le mutant me rattraperait! Suis-je sûr d'être prêt ?")
    # choix combattre ou éviter
    do_what = input("Voulez vous le [combattre] ou l'[éviter]? ")
    while do_what != "combattre" and do_what != "éviter":
        do_what = input("Voulez vous le [combattre] ou l'[éviter]? ")
    if do_what == "combattre":
        print(name_player,": Bon... C'est partit!")
        do_what_combat = None 
        while boss.pv > 0 and joueur.pv > 0:
            print("===================================")
            ### Choix Attaque ou Soin ###
            do_what_combat = input("[attaquer],[soin] : ")
            while do_what_combat != "attaquer" and do_what_combat != "soin":
                do_what_combat = input("[attaquer],[soin],[fuir]")
            ### Choix du soin ###
            if do_what_combat == "soin":
                if "potion" not in joueur.inventory:
                    print("Vous n'avez pas de potion")
                    boss_turn = False
                else:
                    if joueur.pv + potion > joueur.pv_max:
                        joueur.pv = joueur.pv_max
                        joueur.inventory.remove("potion")
                        print("Vous vous êtes soignez, avez maintenant",joueur.pv,"pv!")
                        boss_turn = True
                    else:
                        joueur.pv += potion
                        joueur.inventory.remove("potion")
                        print("Vous vous êtes soignez, avez maintenant",joueur.pv,"pv!")
                        boss_turn = True

            ### Choix d'attaquer ###
            elif do_what_combat == "attaquer":
                ### One shot ###
                if joueur.attack > boss.pv :
                    boss.pv = 0
                    print("Wow! Joli coup! Vous avez reussis à tuer",boss.name,"!")
                    joueur.experience += boss.give_exp
                    print("Vous avez gagné",boss.give_exp,"d'xp!")
                    lvl_up(joueur.experience, joueur.lvl)
                    boss_turn = False
                else:
                    boss.pv -= joueur.attack
                    print("Vous avez infligé",joueur.attack,"point de dégat à",boss.name,". Il lui reste",boss.pv,"pv!")
                    boss_turn = True
                    if boss.pv == 0:
                        print("Wow! Joli coup! Vous avez reussis à tuer",boss.name,"!")
                        joueur.experience += boss.give_exp
                        print("Vous avez gagné",boss.give_exp,"d'xp!")
                        lvl_up(joueur.experience, joueur.lvl)
            ##########################
            ### boss qui attaque ###
            ##########################
            if boss_turn == True :
                ### Finish Him ###
                if boss.attack > joueur.pv+joueur.armor:
                    print(boss.name,"vous a éclaté la tête en vous infligeant",boss.attack,"dégats! Il y a des bouts de votre corps dans tout les coins!")
                    joueur.pv = 0
                    print("Adieu",joueur.name,"...")
                    Game_Over()
                ### Attaque ###
                elif boss.pv > 0:
                    if joueur.armor > boss.attack:
                        print(boss.name,"ne vous a infligé aucun dégats grâce à votre armure!")
                    else:
                        joueur.pv -= (boss.attack-joueur.armor)
                        print(boss.name,"vous attaque! Il vous a infligé",boss.attack,"dégats! Il vous reste",joueur.pv,"pv!")
                        if joueur.pv <= 0:
                            print("Vous êtes mort au combat...",boss.name,"vous as tué!")
                            print("On peut voir des bouts de votre corps et du sang étalé sur des dizaines de mètres!")
                            print("Adieu",name_player,".")
                            Game_Over()
    else:
        print("Vous contournez",boss.name,"en tout discrétion...")