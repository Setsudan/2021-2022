from .spawn_Panel import Spawn_Panel
from .ilsand import island
#! ce fichier réunira toutes les fonctions soit la continuité du jeux. C'est le coeur du programme sans lequel le jeux ne fonctionne pas


def start_game(name):
    name_player = name
    Spawn_Panel(name)
    # ? Pour les iles aller voir comment ça se déroule (CTRL+Click sur la fonction en dessous)
    island(name)
