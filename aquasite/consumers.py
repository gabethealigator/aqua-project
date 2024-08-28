import json
from random import randint
from asyncio import sleep

from channels.generic.websocket import AsyncWebsocketConsumer


class ModuleConsumer(AsyncWebsocketConsumer):
  async def connect(self):
    self.moduleId = self.scope['url_route']['kwargs']['moduleId']
    await self.accept()

    for _ in range(1000):
      await self.send(json.dumps({'value': randint(0, 25)}))
      await sleep(1)

  async def disconnect(self, code):
    pass

  