from Panel.welcomePanel import Game_Init
player_alive = ""
def game():
    if player_alive == True:
        Game_Init()
    else:
        print("On peut pas être bon en tout mais on a tous une seconde chance.")
        player_alive == True
        Game_Init()
game()


""" import msvcrt
# ...
char = msvcrt.getch()
print(char) """