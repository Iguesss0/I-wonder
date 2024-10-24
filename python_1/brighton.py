fanCP = "Crystal Palace"
question_options = ['Yes/Of Course', 'No']
fanFor = input(question_options[0] + ": ")
fanOpp = input(question_options[1] + ": ")
bankAccountBalance = 100

def ask_question(consideration):
    cond = True
    while cond:
        ask_question('Is Brighton winning the league in 2024?')
        consideration = input("Your consideration (Yes/Of Course or No): ")

        if consideration == 'Yes/Of Course':
            print("Thank you for your response!")
            cond = False  
        elif consideration == 'No':
            print("Please provide your reasoning for 'No'.")
            
        else:
            print("Invalid input. Please respond with 'Yes/Of Course' or 'No'.")

if fanCP:
    exit()
else:
    print('Is Brighton winning the league in 2024?')

if fanFor:
    bankAccountBalance


if fanOpp:
    ask_question(None)
