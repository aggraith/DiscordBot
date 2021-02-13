module.exports = {
  name: 'ping',
  description: 'this is a ping pong command',
  execute(client, message, args) {
    message.channel.send('pong!'); //send pong!
  }
}
