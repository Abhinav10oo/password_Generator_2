import random

def generate_password():

    uppercase_letters = [chr(i) for i in range(ord('A'), ord('Z') + 1)]
    lowercase_letters = [chr(i) for i in range(ord('a'), ord('z') + 1)]
    numbers = [str(i) for i in range(10)]
    special_characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+']

    use_upper = input("Use uppercase letters? (y/n): ").lower()
    use_lower = input("Use lowercase letters? (y/n): ").lower()
    use_numbers = input("Use numbers? (y/n): ").lower()
    use_special = input("Use special characters? (y/n): ").lower()
    use_custom = input("Do you want to use a custom word? (y/n): ").lower()


    character_pool = []

    if use_upper == 'y':
        character_pool += uppercase_letters
    if use_lower == 'y':
        character_pool += lowercase_letters
    if use_numbers == 'y':
        character_pool += numbers
    if use_special == 'y':
        character_pool += special_characters

    if not character_pool:
        print("You must select at least one character type.")
        return

    password_length = int(input("Enter desired password length: "))

    name = "" 
    
    if use_custom == 'y':
        name = input("Enter custom word: ").strip()
        name = ''.join(random.choice([c.lower(), c.upper()]) for c in name)


    if len(name) > password_length:
        print("Custom word is longer than password length.")
        return

    remaining_length = password_length - len(name)

    random_part = ''
    for _ in range(remaining_length):
        random_part += random.choice(character_pool)

    password_list = list(name + random_part)
    random.shuffle(password_list)
    final_password = ''.join(password_list)

    print("\nGenerated Password:", final_password)

generate_password()
