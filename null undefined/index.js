export function createVisitor(name, age, ticketId) {
  const obj = {
    name,
    age,
    ticketId,
  };
  return obj;
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return "unknown ticket id";
  } else if (tickets[ticketId] === null) {
    return "not sold";
  } else {
    return `sold to ${tickets[ticketId]}`;
  }
}

export function simpleTicketStatus(tickets, ticketId) {
  if (tickets[ticketId] === undefined) {
    return "invalid ticket !!!";
  } else if (tickets[ticketId] === null) {
    return "invalid ticket !!!";
  } else {
    return tickets[ticketId];
  }
}

export function gtcVersion(visitor) {
  if (visitor.gtc) {
    return visitor.gtc.version;
  } else {
    return undefined;
  }
}
