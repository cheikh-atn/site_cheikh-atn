const myData = {
    parcours: [
        { date: "2025 – 2026", titre: "Licence 3 — Systèmes, Réseaux et Télécommunications", lieu: "École Supérieure Polytechnique de Dakar", id: 3 },
        { date: "2023 – 2025", titre: "DST — Systèmes, Réseaux et Télécommunications", lieu: "École Supérieure Polytechnique de Dakar", id: 2 },
        { date: "2022", titre: "Baccalauréat Scientifique (Série S)", lieu: "Lycée Ababacar SY, Tivaouane", id: 1 }
    ],

    projets: [
        {
            icon: "🧠",
            nom: "Détection du Cancer du Sein par IA",
            desc: "Système d'aide au diagnostic médical par analyse de mammographies. Conception d'un modèle de vision par ordinateur pour la classification d'images médicales, avec interface web de visualisation pour médecins.",
            tech: ["Python", "Vision par ordinateur", "Classification d'images", "JavaScript", "HTML/CSS"],
            context: "Projet de fin d'études — ESP Dakar, 2025"
        },
        {
            icon: "🔐",
            nom: "Pentesting & Sécurité Offensive",
            desc: "Tests de pénétration sur Metasploitable : exploitation de vulnérabilités, élévation de privilèges. Étude des protocoles cryptographiques MD5, SHA-2, SHA-3, AES. Contournement de mécanismes d'authentification (LDAP, pare-feu, ACL).",
            tech: ["Kali Linux", "Metasploit", "Cryptographie", "LDAP", "ACL"],
            context: "Cours & Travaux Pratiques"
        },
        {
            icon: "✉️",
            nom: "Serveur de Messagerie Sécurisé",
            desc: "Déploiement d'iRedMail avec authentification centralisée LDAP. Sécurisation TLS/SSL, gestion fine des droits et accès utilisateurs.",
            tech: ["iRedMail", "LDAP", "TLS/SSL", "Linux"],
            context: "Projet Linux"
        },
        {
            icon: "📹",
            nom: "Application Visioconférence Temps Réel",
            desc: "Développement full-stack d'une application de messagerie et visioconférence en temps réel avec connexions peer-to-peer.",
            tech: ["JavaScript", "Socket.IO", "PeerJS", "HTML/CSS", "MySQL"],
            context: "Projet Développement Web"
        },
        {
            icon: "🌐",
            nom: "Administration Réseau Cisco",
            desc: "Configuration VLAN, routage statique/dynamique, déploiement DHCP, DNS, serveur Apache et Mail. Supervision réseau avec Nagios, simulation sur GNS3 et Packet Tracer.",
            tech: ["Cisco IOS", "VLAN", "OSPF", "EIGRP", "GNS3", "Nagios"],
            context: "Projets CCNA"
        },
        {
            icon: "💡",
            nom: "Infrastructure Fibre Optique",
            desc: "Soudure, mesure OTDR et raccordement de câbles fibre optique. Étude terrain des techniques de raccordement et analyse des performances.",
            tech: ["Soudure fibre", "OTDR", "FTTH", "Photométrie"],
            context: "Étude terrain"
        }
    ],

    competences: [
        {
            icon: "🛡️",
            nom: "Cybersécurité",
            details: "Pentesting avec Kali Linux & Metasploit, exploitation de Metasploitable. Cryptographie (MD5, SHA-2, SHA-3, AES), Firewall, IDS/IPS, gestion des vulnérabilités. Authentification LDAP, ACL.",
            documents: [{ label: "Rapport Pentesting", url: "LIEN_DRIVE" }]
        },
        {
            icon: "🌐",
            nom: "Réseaux & Commutation",
            details: "Administration Cisco (CCNA) : VLAN, routage statique/dynamique, OSPF, EIGRP, RIP. Protocoles SSL/TLS, SSH, HTTPS, IPSec. Simulation GNS3 & Packet Tracer.",
            documents: [
                { label: "Schéma Réseau", url: "LIEN_DRIVE" },
                { label: "Config EIGRP", url: "LIEN_DRIVE_EIGRP" }
            ]
        },
        {
            icon: "🐧",
            nom: "Systèmes d'exploitation",
            details: "Linux (Ubuntu, Debian, Alpine, Kali) : administration système, scripting bash, gestion des services. Windows Server.",
            documents: [{ label: "Documentation Linux", url: "LIEN_DRIVE" }]
        },
        {
            icon: "🐳",
            nom: "Virtualisation & Cloud",
            details: "Conteneurisation avec Docker : création et déploiement de conteneurs Alpine Linux. Isolation réseau, volumes, Docker Compose.",
            documents: [{ label: "Rapport Docker", url: "LIEN_DRIVE" }]
        },
        {
            icon: "💡",
            nom: "Fibre Optique",
            details: "Soudure fibre, mesures OTDR, Réflectométrie, Photométrie, raccordement connecteurs. Déploiement FTTH.",
            documents: [{ label: "Mémoire Fibre Optique", url: "LIEN_DRIVE" }]
        },
        {
            icon: "📞",
            nom: "Téléphonie sur IP (VoIP)",
            details: "Protocoles SIP, configuration et administration d'Asterisk, intégration dans infrastructure réseau.",
            documents: [{ label: "Rapport VoIP", url: "LIEN_DRIVE" }]
        },
        {
            icon: "🤖",
            nom: "IA & Vision par ordinateur",
            details: "Modèles de classification d'images médicales, détection d'objets. Projet de détection du cancer du sein par analyse de mammographies.",
            documents: [{ label: "Rapport Projet IA", url: "LIEN_DRIVE" }]
        },
        {
            icon: "📡",
            nom: "Faisceaux hertziens & Sans fil",
            details: "Technologies de transmission radio, réseaux sans fil, dimensionnement de liaisons hertziennes.",
            documents: [{ label: "Rapport Faisceau", url: "LIEN_DRIVE" }]
        },
        {
            icon: "💻",
            nom: "Développement Web",
            details: "HTML, CSS, JavaScript full-stack. Applications temps réel avec Socket.IO et PeerJS. Base de données MySQL.",
            documents: [{ label: "Projet Web", url: "LIEN_DRIVE" }]
        }
    ],

    certifications: [
        {
            issuer: "ESP Dakar",
            nom: "DST — Systèmes Réseaux et Télécommunications",
            details: "Diplôme Supérieur de Technologie obtenu à l'École Supérieure Polytechnique de Dakar.",
            documents: [{ label: "Voir le diplôme", url: "https://drive.google.com/file/d/1aWe4l9gpsZzbmXrfeGNyEdfeLX9_YXZ8/view?usp=sharing" }]
        },
        {
            issuer: "Huawei Talent",
            nom: "Data Communication and Network Technologies",
            details: "Certification officielle Huawei validant les compétences en communications de données et technologies réseau.",
            documents: [{ label: "Voir sur Credly", url: "https://www.credly.com/badges/3136558c-6ac1-4dc0-a3f8-f7c587dd77c4/public_url" }]
        },
        {
            issuer: "Cisco",
            nom: "Networking Devices and Initial Configuration",
            details: "Certification Cisco validant la configuration initiale et la gestion des équipements réseau.",
            documents: [{ label: "Voir sur Credly", url: "https://www.credly.com/badges/0205924f-6922-491e-8d75-6ac754252a04/public_url" }]
        },
        {
            issuer: "Cisco",
            nom: "Introduction to Cybersecurity",
            details: "Certification Cisco en cybersécurité fondamentale : menaces, vulnérabilités, bonnes pratiques.",
            documents: [{ label: "Voir sur Credly", url: "https://www.credly.com/badges/dbb01867-9e4f-4f93-9e1e-03c008c1f33f/public_url" }]
        }
    ]
};
