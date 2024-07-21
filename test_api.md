**Create User** 

http POST http://localhost:3000/users/register
    Content-Type:application/json
    fname=Иван
    lname=Иванов
    mname=Иванович
    email=ivan.ivanov@example.com
    password=supersecretpassword

---

**Update User Info**

http PATCH http://localhost:3000/users/1
    fname="Иван"
    lname="Иванов"
    password="test1234"

---

**Login**

http POST http://localhost:3000/auth/login
    email=ivan.ivanov@example.com
    password=test1234

---

**Logout** 

http POST http://localhost:3000/auth/logout Authorization:"Bearer token"

---

**Reset Password**

http POST http://localhost:3000/users/request-password-reset email=user@example.com

---

**Set New password**

http POST http://localhost:3000/users/reset-password email=user@example.com newPassword=newSecurePassword

---



**Create Organization**

http POST http://localhost:3000/organizations/register
    name="1 Название Организации"
    address="Улица, Город, Страна"
    contact_email=contact1@example.com
    contact_phone="+1234567890"
    tin="12345678903"
