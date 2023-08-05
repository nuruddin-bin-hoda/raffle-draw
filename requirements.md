# Lottery API

- sell lottery ticket [create a ticket]
- bulk buy (user can buy multiple lottery ticket at a time) [create multiple tickets]
- update lottery ticket [byId & byUsername]
- delete lottery ticket [byId & byUsername]
- get all lottery ticket
- get lottery ticket by ID
- raffle draw

# Ticket

- number / ID (unick)
- price
- username
- timestamp

# Routes

- GET    /tickets/t/:ticketId [get a ticket by ID] 👍
- PATCH  /tickets/t/:ticketId [update a ticket by ID] 👍
- DELETE /tickets/t/:ticketId [delete a ticket by ID] 👍
- GET    /tickets/u/:username [get a ticket by username] 👍
- PATCH  /tickets/u/:username [update a ticket by username] 👍
- DELETE /tickets/u/:username [delete a ticket by username]
- POST   /tickets/sell [create a ticket] 👍
- POST   /tickets/bulk [create multiple tickets] 👍
- GET    /tickets/draw [raffle draw] 
- GET    /tickets/bust [delete all tickets] 
- GET    /tickets [get all tickets] 👍
