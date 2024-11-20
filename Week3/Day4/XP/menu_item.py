from database import connection, cursor

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save_item(self):
        save_item_query = f'''INSERT INTO Menu_Items(item_name, item_price)
                                VALUES ('{self.name}', {self.price})'''
        
        cursor.execute(save_item_query)
        connection.commit()
        
    
    def delete_item(self):
        delete_item_query = f'''DELETE FROM Menu_Items WHERE item_name = '{self.name}' and item_price = {self.price}'''
        cursor.execute(delete_item_query)
        connection.commit()
        

    def update_item(self, data):
        if isinstance(data, str):
            update_item_query = f'''UPDATE Menu_Items SET item_name = '{data}' WHERE item_name = '{self.name}' and item_price = {self.price} '''
            self.name = data
        else:
            update_item_query = f'''UPDATE Menu_Items SET item_price = {data} WHERE item_name = '{self.name}' and item_price = {self.price} '''
            self.price = data

        cursor.execute(update_item_query)
        connection.commit()
        
        
        

# item = MenuItem('French fries', 15)
# item.save_item()
# item.update_item('chair')
# item.update_item(70)