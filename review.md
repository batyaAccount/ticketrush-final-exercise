# Code review: `noa/refund`

`calcRefund` currently applies the 90% refund rate to both the ticket price and the service fee. The comment says the service fee is not refundable, so calculate the refund from `TICKET_PRICE` only. The current formula returns ₪325.80 for one ticket instead of ₪315, and ₪651.60 for two instead of ₪630; both refund tests fail.

`node tests/run.js` also reports two unrelated failures in `formatPrice` on this branch: the existing formatter returns ₪0.00. No changes were made to Noa's code or merged into `main`.
