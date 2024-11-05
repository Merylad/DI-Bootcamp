# Exercise 1 : Student Grade Summary

# student_grades = {
#     "Alice": [88, 92, 100],
#     "Bob": [75, 78, 80],
#     "Charlie": [92, 90, 85],
#     "Dana": [83, 88, 92],
#     "Eli": [78, 80, 72]
# }

# student_averages = {}

# for student in student_grades:
#     student_averages[student] = round(sum(student_grades[student]) / len(student_grades[student]), 2 )

# print(student_averages)

# student_letter_grades= {}

# for student in student_averages :
#     if student_averages[student] >= 90 :
#         student_letter_grades[student] = 'A'
#     elif 80<= student_averages[student] <=89 :
#         student_letter_grades[student] = 'B'
#     elif 70<= student_averages[student] <=79 :
#         student_letter_grades[student] = 'C'
#     elif 60<= student_averages[student] <=69 :
#         student_letter_grades[student] = 'D'
#     else:
#         student_letter_grades[student] = 'F'

# print(student_letter_grades)

# for student in student_letter_grades :
#     print(f'{student} has the average of {student_averages[student]} and the letter {student_letter_grades[student]}')


##🌟 Exercise 2 : Advanced Data Manipulation and Analysis

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

total_sales = {}

for customer in sales_data :

    if customer['product'] in total_sales.keys():
        total_sales[customer['product']] += customer['price']*customer['quantity']
    else:
        total_sales[customer['product']] = customer['price']*customer['quantity']

    
print (total_sales)

customer_spending_profile = {}

for customer in sales_data :
    
    if customer['customer_id'] in customer_spending_profile.keys():
        customer_spending_profile[customer['customer_id']] += customer['price']*customer['quantity']
    else:
        customer_spending_profile[customer['customer_id']] = customer['price']*customer['quantity']

# print(customer_spending_profile)

for customer in sales_data:
    customer.update({'total_price': customer['price']*customer['quantity']})

# print (sales_data)
high_value_transactions = sorted([customer for customer in sales_data if customer['total_price']>=500],key=lambda x: x['total_price'], reverse=True )
# print(high_value_transactions)

purchase_counts = {}


for customer in sales_data:
    
    if customer['customer_id'] in purchase_counts.keys():
        purchase_counts[customer['customer_id']] += 1
    else:
        purchase_counts[customer['customer_id']] = 1

# print(purchase_counts)

loyal_customers = []

for customer_id, count in purchase_counts.items():
    if count >=2 :
        loyal_customers.append(customer_id)

print(loyal_customers)