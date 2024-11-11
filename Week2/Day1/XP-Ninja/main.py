class Phone:
    def __init__(self, number):
        self.number = number
        self.call_history = []
        self.messages=[]

    def call(self, otherphone):
        info = f'{self.number} called {otherphone.number}'
        self.call_history.append(info)

        info2 = f'{otherphone.number} has been called by {self.number}'
        otherphone.call_history.append(info2)
        print(info)

    def show_call_history(self):
        for call in self.call_history :
            print(call)

    def send_message(self, otherphone, message):
        message_dict = {}
        message_dict['to'] = otherphone.number
        message_dict ['from'] = self.number
        message_dict['content'] = message

        self.messages.append(message_dict)
        otherphone.messages. append(message_dict)

        return message_dict
    
    def show_outgoing_messages(self):
        outgoing_messages = []
        for message in self.messages :
            if message['from'] == self.number :
                outgoing_messages.append (message)
        return outgoing_messages
    
    def show_incoming_messages(self):
        incoming_messages = []
        for message in self.messages :
            if message['to'] == self.number :
                incoming_messages.append (message)
        return incoming_messages
    
    def show_messages_from(self, otherphone):
        messages = []
        for message in self.messages :
            if message['from'] == otherphone.number :
                messages.append (message)
        return messages
    
my_phone = Phone('0537853284')
husband_phone = Phone ('0536548912')
friend_phone = Phone ('0537451689')

my_phone.call(husband_phone)
friend_phone.call(my_phone)
my_phone.send_message(husband_phone, 'I am home')
my_phone.show_call_history()
husband_phone.show_call_history()
husband_phone.send_message(my_phone, 'ok')
my_phone.send_message(friend_phone, 'Hey how are you?')
friend_phone.send_message(my_phone, ('Fine what about you ?'))

print(my_phone.messages)
print(husband_phone.messages)
print(my_phone.show_outgoing_messages())
print(husband_phone.show_outgoing_messages())
print(my_phone.show_incoming_messages())
print(husband_phone.show_incoming_messages())
print (my_phone.show_messages_from(friend_phone))