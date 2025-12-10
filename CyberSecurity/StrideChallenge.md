# STRIDE Challenge 🕵️‍♀️

        .--.       .--.
    _  `    \     /    `  _
     `\.===. \.^./ .===./`
            \/`"`\/
         ,  |     |  ,
        / `\|`-.-'|/` \
       /    |  \  |    \
    .-' ,-'`|   ; |`'-, '-.
        |   |    \|   | 
        |   |    ;|   |
        |   \    //   |
        |    `._//'   |
       .'             `.
    _,'                 `,_

Time to think like a security tester!

Below are six QuickBite Potential Threats.  
For each one, write which STRIDE category it fits into, and why.

---

Potential Threat 1:
Thousands of fake orders slow the app to a crawl.
STRIDE:Denial of Service
Why: Reason is that the app is being overwhelmed with fake orders, making it unavailable to legitimate users.

---

Potential Threat 2:
A driver marks an order “delivered,” but later insists they didn’t.
STRIDE: Repudiation
Why: Reason is that the driver is denying an action they took, which is a classic example of repudiation.

---

Potential Threat 3:
A driver discovers an admin dashboard link can see all the current orders.
STRIDE: Elevation of Privilege
Why: Reason is that the driver, who should not have access to admin functions, is able to view sensitive information meant for administrators only.

---

Potential Threat 4:
A customer changes an order ID in the URL and views another person’s receipt.
STRIDE: Information Disclosure
Why: Reason is that the customer is able to access information they should not have access to by manipulating the URL.

---

Potential Threat 5:
An error message prints the customer’s full address to the browser console.
STRIDE: Information Disclosure
Why: Reason is that the error message is exposing sensitive customer information to unauthorized viewers.

---

Potential Threat 6:
A customer edits their total price to $0.30 before checkout.
STRIDE: Tampering
Why: Reason is that the customer is altering data (the total price) in a way that they should not be able to.

STRIDE
S = Spoofing (Could someone pretend to be someone else?)
T = Tampering (Could someone change data they shouldn’t?)
R = Repudiation (Could someone do something and deny it later?)
I = Information Disclosure (Could private data leak out?)
D = Denial of Service (Could someone stop the app from working?)
E = Elevation of Privilege (Could someone get powers they shouldn’t have?)