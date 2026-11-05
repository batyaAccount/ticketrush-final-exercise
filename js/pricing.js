// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MAX_MEMBER_TICKETS = 4;
const STUDENT_DISCOUNT = 0.15; // מבצע סטודנטיות: 15% על מחיר הכרטיס

function maxTickets(isMember) {
  return isMember ? MAX_MEMBER_TICKETS : MAX_TICKETS;
}

function calcTotal(qty, isMember, isStudent) {
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) return null;
  const discount = isMember ? 0.2 : (isStudent ? STUDENT_DISCOUNT : 0);
  const ticketPrice = TICKET_PRICE * (1 - discount);
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = { TICKET_PRICE, SERVICE_FEE, MAX_TICKETS, STUDENT_DISCOUNT, maxTickets, calcTotal };
}
