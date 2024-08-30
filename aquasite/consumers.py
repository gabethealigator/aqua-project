import json
from asyncio import sleep

from channels.generic.websocket import AsyncWebsocketConsumer


class ModuleConsumer(AsyncWebsocketConsumer):
  async def connect(self):
    from .views import database, userId
    self.moduleId = self.scope['url_route']['kwargs']['moduleId']
    await self.accept()

    loop = True
    while loop == True:
      module = database.child('UsersData').child(userId).child('modules').child(self.moduleId).child('statistics').get().val()
      temperature = module['TEMP']
      level = module['LEVEL']
      await self.send(json.dumps({
          'temperature': temperature,
          'level': level,
        }))
      await sleep(5)

  async def disconnect(self, code):
    pass

  