import pg8000

connection = pg8000.connect(database = 'bootcamp',
                              user = 'postgres',
                              password = 'naomie',
                              host='localhost',
                              port='5432')

cursor = connection.cursor()