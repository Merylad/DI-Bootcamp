from database import connection, cursor

class MenuManager:
    @classmethod
    def get_by_name(cls,name) :
        query = f'''SELECT * FROM Menu_Items WHERE item_name ILIKE '{name}' '''
        cursor.execute(query)
        connection.commit()
        results = cursor.fetchall()
        if len(results) > 0 :
            return results[0]
        else:
            return None

    @classmethod    
    def all_items(cls):
        query = f'''SELECT * FROM Menu_Items  '''
        cursor.execute(query)
        connection.commit()
        results = cursor.fetchall()
        menu = []
        for item in results :
            menu.append({'name' : item[1], 'price': item[2]})
        return menu

menu=MenuManager()
# menu.get_by_name('thing')
print(menu.all_items())

print(MenuManager.get_by_name('Burger'))
