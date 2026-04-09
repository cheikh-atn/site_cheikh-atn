const myData = {
    parcours: [
        { date: "2025 - 2026", titre: "Licence 3 Systèmes, Réseaux et Télécommunications", lieu: "ESP Dakar", id: 3 },
        { date: "2023 - 2025", titre: "Diplôme Supérieur de Technologie en Systèmes Réseaux et Télécommunications   ", lieu: "ESP Dakar", id: 2 },
        { date: "2022", titre: "Baccalauréat Scientifique", lieu: "Lycée Ababacar Sy", id: 1 }
    ],
   competences: [
{
        nom: "Virtualisation et Cloud",
        details: "Mise en place et validation d’un conteneur Alpine Linux avec Docker..",
        documents: [
            { label: "Creation conteneur.", url: "LIEN_DRIVE" }]
    }, 
    {
        nom: "Systèmes d’exploitation",
        details: "Distribution Linux (Ubuntu, Alpine...), Windows.",
        documents: [
            { label: "mt dans une liaison optique.", url: "LIEN_DRIVE" }]
    }, 
     {
        nom: "Technologies de la securité",
        details: "Distribution Linux (Ubuntu, Alpine...), Windows.",
        documents: [
            { label: "mt dans une liaison optique.", url: "LIEN_DRIVE" }]
    }, 
     {
        nom: "Traitement d’image et vision par ordinateur ",
        details: "Distribution Linux (Ubuntu, Alpine...), Windows.",
        documents: [
            { label: "mt dans une liaison optique.", url: "LIEN_DRIVE" }]
    }, 
    {
        nom: "Application web dynamique ",
        details: "Creation de site web dynamique .",
        documents: [
            { label: " Creation de site web dynamique .", url: "LIEN_DRIVE" }]
    },
    {
        nom: "Faisceau hertzien et Réseaux sans fil ",
        details: "Distribution Linux (Ubuntu, Alpine...), Windows.",
        documents: [
            { label: "mt dans une liaison optique.", url: "LIEN_DRIVE" }]
    },  
    {
        nom: "Fibre Optique",
        details: "Soudure fibre ,Mesure (OTDR, Réflectométrie,Photométrie,Connecteur),FTTH.",
        documents: [
            { label: "mémoire sur l’étude et l’analyse des performances des techniques de raccordement dans une liaison optique.", url: "LIEN_DRIVE" }]
    }, 
    {
        nom: "Téléphonie sur IP (VoIP)",
        details: "Protocoles SIP,Configuration Asterisk.",
        documents: [{ label: "Rapport VoIP Drive", url: "LIEN_DRIVE" }]
    }, 
       
    {
        nom: "Réseaux & Commutation",
        details: "Administration Cisco (VLAN, EIGRP, OSPF,RIP).",
        documents: [
            { label: "Schéma Réseau Drive", url: "LIEN_DRIVE" }, // <-- Virgule ici
            { label: "Configuration Protocole EIGRP", url: "LIEN_DRIVE_EIGRP" } // <-- PAS de virgule ici (dernier)
        ]
    } // <-- PAS de virgule ici si c'est le dernier bloc de la liste
],
    certifications: [
         {
            nom: "DST:Systèmes Réseaux et Télécommunications ",
            details: "Obtention du Diplôme Supérieur de Technologie en Systèmes Réseaux et Télécommunications.",
            documents: [{ label: "Certificat PDF", url: "LIEN_DRIVE" } 
            ]
        },
         {
            nom: "Huawei:Data Communication and Network",
            details: "Validation officielle des compétences réseaux.",
            documents: [{ label: "Certificat PDF", url: "https://www.credly.com/badges/3136558c-6ac1-4dc0-a3f8-f7c587dd77c4/public_url" } 
            ]
        },
        {
            nom: "Cisco:Networking Devices and Initial Configuration",
            details: " Cisco:Validation officielle des compétences réseaux.",
            documents: [{ label: "Certificat PDF", url: "LIEN_DRIVE" } 
            ]
        },
        {
            nom: "Cisco:Introduction to Cybersecurity",
            details: "Validation officielle des compétences réseaux.",
            documents: [{ label: "Certificat PDF", url: "LIEN_DRIVE" } 
            ]
        }  
        
    ]
};