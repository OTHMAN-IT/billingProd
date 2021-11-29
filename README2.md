##Billing.service.ts
-------
Injecter la root de la facture et l'utilisation du protocol HttpClient pour l'interaction avec le back end Spring Boot.

##billing.components.ts
-------
-Déclaration d'une variable public pour stocker la data.
-l'implementation de la méthode onInit.
-Déclarer un constructeur avec comme parametre le service ayant l httpCLient.
-Création d'une méthode onGetBillings pour la récuperation de la donnée back end (Json) et stockage dans la variable déclarer au début de la classe.

##billings.components.html
-------
inclure une template invoice bootstrap dans le component html est l'affichage des informations collecter dans le "components ts" et "service ts" à travers la boucle ngFor.

##app.module.ts
-------
Emettre les imports nécessaires (HttpClient...) et faire les déclaration des components (BillingsComponent...).

Voici le front End :

![image](https://user-images.githubusercontent.com/61996048/143942263-2fe9e026-c0c7-481b-b60a-798d8f3a3f71.png)

