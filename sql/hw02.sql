--1. +Вибрати усіх клієнтів, чиє імя має менше ніж 6 символів.
select * from client where length(firstName)<6;
--2. +Вибрати львівські відділення банку.+
select * from department where DepartmentCity = 'lviv';
--3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from client where Education = 'high' order by LastName;
--4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select * from application order by Sum desc limit 5;
--5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select * from client where LastName like '%ov' or LastName like '%ova';
--6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select * from client
join department d
on d.idDepartment=client.Department_idDepartment
where d.DepartmentCity='kyiv';
--7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.(в таблиці немає телефонів)
select firstName, passport from client order by FirstName;
--8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
select * from client c
join application a
on c.idClient=a.Client_idClient
where a.Sum	> 5000;
--9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select count(idClient)
from client
inner join department
on idDepartment = Department_idDepartment
union
select count(idClient)
from client
inner join department
on idDepartment = Department_idDepartment
where DepartmentCity = 'lviv';
--10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select Client_idClient, FirstName, LastName, max(Sum)  from  application
join client c
on application.Client_idClient = c.idClient
group by Client_idClient;
--11. Визначити кількість заявок на кредит для кожного клієнта.
select count(idApplication), FirstName, LastName
from client
join application
on client.idClient = application.Client_idClient
group by client.idClient;
--12. Визначити найбільший та найменший кредити.
select max(Sum)  from application;
select min(Sum)  from application;
--13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select count(application.idApplication), FirstName, LastName
from client
join application
on client.idClient = application.Client_idClient
where Education = 'high'
group by idClient;
--14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select avg(Sum) as avg, FirstName, LastName
from client
join application
on client.idClient = application.Client_idClient
group by idClient
order by avg desc
limit 1;
--15. Вивести відділення, яке видало в кредити найбільше грошей
select idDepartment, DepartmentCity, sum(Sum) as sum from department d
join client c on d.idDepartment = c.Department_idDepartment
join application a on c.idClient = a.Client_idClient
group by d.idDepartment order by max(Sum) desc
limit 1;
--16. Вивести відділення, яке видало найбільший кредит.
select  idDepartment, DepartmentCity, max(Sum) from department d
join client c on d.idDepartment = c.Department_idDepartment
join application a on c.idClient = a.Client_idClient
group by d.idDepartment order by max(Sum) desc
limit 1;
--17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update  application
join client c on application.Client_idClient = c.idClient
set Sum = 6000
where c.Education = 'high';
--18. Усіх клієнтів київських відділень пересилити до Києва.
update client
join department
on client.Department_idDepartment = department.idDepartment
set client.City = 'Kyiv'
where department.DepartmentCity = 'kyiv';
--19. Видалити усі кредити, які є повернені.
delete
from application
where application.CreditState = 'returned';
--20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete application from application
join client c on application.Client_idClient = c.idClient
where  substr(c.LastName,2,1) in ('a', 'e', 'i', 'o', 'u');
--Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select DepartmentCity, sum from application
join client c on application.Client_idClient = c.idClient
join department d on c.Department_idDepartment = d.idDepartment
where d.DepartmentCity = 'Lviv' and Sum > 5000;
--Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select FirstName, LastName, sum, Currency from client
join application a on client.idClient = a.Client_idClient
where CreditState = 'returned' and sum >5000;
--/* Знайти максимальний неповернений кредит.*/
select * from application
where CreditState='not returned'
order by Sum desc
limit 1;

select max(Sum) from application
where CreditState = 'Not returned';
--/*Знайти клієнта, сума кредиту якого найменша*/
select * from client c
join application a
on c.idClient=a.Client_idClient
order by Sum
limit 1;

select FirstName, LastName, Sum
from client
inner join application
on client.idClient = Client_idClient
where Sum = (select min(Sum) from application);
--/*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/
select idApplication,  Sum
from application
where Sum > (select avg(Sum) from application);
--/*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/
select distinct client.FirstName, client.LastName, client.age, client.Education
    from client
    right join application
    on client.idClient = application.Client_idClient
    where client.City = (select City
                                from client
                                join application on client.idClient = application.Client_idClient
                                group by idClient
                                order by count(idApplication) desc
                                limit 1);
--місто чувака який набрав найбільше кредитів
select count(idApplication) as qy, c.City
from application a
join client c on a.Client_idClient = c.idClient
group by Client_idClient
order by qy desc
limit 1;