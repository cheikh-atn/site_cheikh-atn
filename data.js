const myData = {

  parcours: [
    { id: 3, date: "2025 – 2026", titre: "Licence 3 — Systèmes, Réseaux et Télécommunications", lieu: "École Supérieure Polytechnique (ESP) de Dakar" },
    { id: 2, date: "2023 – 2025", titre: "DST — Systèmes, Réseaux et Télécommunications",       lieu: "École Supérieure Polytechnique (ESP) de Dakar" },
    { id: 1, date: "2022",        titre: "Baccalauréat Scientifique — Série S2",                   lieu: "Lycée Ababacar SY" }
  ],

  about: [
    { icon: "🛡️", titre: "Cybersécurité",          desc: "SSL/TLS, SSH, IPSec, cryptographie, initiation pentesting (Kali / Metasploitable)" },
    { icon: "🌐", titre: "Réseaux Cisco",           desc: "VLAN, routage statique/dynamique, OSPF, EIGRP, GNS3, Packet Tracer, Nagios" },
    { icon: "🤖", titre: "Intelligence Artificielle", desc: "Vision par ordinateur, classification d'images médicales (projet fin d'études)" },
    { icon: "🚁", titre: "Développement système",   desc: "UAV-D+ : topologie optimisée pour drones UAV — stage ISFAD Dakar" }
  ],

  projets: [
    {
      icon: "🧠", ctx: "Projet de fin d'études · ESP Dakar 2025",
      nom: "Détection du Cancer du Sein par IA",
      desc: "Mise en œuvre d'un modèle de vision par ordinateur pour la classification d'images médicales. Développement d'une interface web de visualisation des résultats pour les médecins.",
      tech: ["Vision par ordinateur", "Classification d'images", "Python", "Interface web"]
    },
    {
      icon: "🚁", ctx: "Stage ISFAD Dakar · Section RDI",
      nom: "UAV-D+ — Optimisation de drones",
      desc: "Développement complet d'un système d'aide à la génération de structures topologiques optimisées pour améliorer l'autonomie des drones UAV moyens.",
      tech: ["Algorithmique", "Topologie", "Systèmes embarqués"]
    },
    {
      icon: "🌐", ctx: "Projets CCNA · ESP Dakar",
      nom: "Administration Réseau Cisco",
      desc: "Configuration VLAN, routage statique/dynamique sur équipements Cisco. Déploiement DHCP, DNS, Apache, Mail. Supervision réseau avec Nagios.",
      tech: ["Cisco IOS", "VLAN", "OSPF", "EIGRP", "GNS3", "Nagios"]
    },
    {
      icon: "✉️", ctx: "Projet Linux · ESP Dakar",
      nom: "Serveur de Messagerie Sécurisé",
      desc: "Déploiement d'iRedMail avec authentification centralisée LDAP et sécurisation TLS/SSL. Gestion fine des droits et accès utilisateurs.",
      tech: ["iRedMail", "LDAP", "TLS/SSL", "Linux"]
    },
    {
      icon: "📹", ctx: "Projet Web · ESP Dakar",
      nom: "Application Temps Réel — Visio & Chat",
      desc: "Messagerie et appels vidéo en temps réel avec connexions peer-to-peer. Développement full-stack HTML/CSS/JS avec Socket.IO et PeerJS.",
      tech: ["JavaScript", "Socket.IO", "PeerJS", "HTML/CSS", "MySQL"]
    },
    {
      icon: "🔐", ctx: "Travaux Pratiques · Kali Linux",
      nom: "Initiation au Pentesting",
      desc: "Exploitation de vulnérabilités sur machine Metasploitable en environnement contrôlé. Tests d'élévation de privilèges avec le Metasploit Framework.",
      tech: ["Kali Linux", "Metasploit", "Metasploitable"]
    }
  ],

  competences: [
    { icon: "🛡️", nom: "Cybersécurité",            details: "Protocoles SSL/TLS, SSH, IPSec. Cryptographie (MD5, SHA-2, SHA-3, AES). Firewall, IDS/IPS, LDAP. Initiation au pentesting avec Kali Linux & Metasploit.", documents: [{ label: "Rapport Pentesting", url: "LIEN_DRIVE" }] },
    { icon: "🌐", nom: "Réseaux Cisco",             details: "CCNA : VLAN, routage statique/dynamique, OSPF, EIGRP, RIP. Services : DHCP, DNS, Apache, Mail, VoIP Asterisk. Supervision Nagios. Simulation GNS3 & Packet Tracer.", documents: [{ label: "Schéma Réseau", url: "LIEN_DRIVE" }] },
    { icon: "🐧", nom: "Systèmes Linux",            details: "Ubuntu, Debian — administration système, gestion des services, scripting bash. Déploiement de services réseau complets.", documents: [{ label: "Documentation Linux", url: "LIEN_DRIVE" }] },
    { icon: "🐳", nom: "Virtualisation & Docker",   details: "Conteneurisation Docker, déploiement Alpine Linux, isolation réseau, volumes.", documents: [{ label: "Rapport Docker", url: "LIEN_DRIVE" }] },
    { icon: "💡", nom: "Fibre Optique",             details: "Soudure fibre, mesures OTDR, Réflectométrie, Photométrie, raccordement connecteurs FTTH.", documents: [{ label: "Mémoire Fibre Optique", url: "LIEN_DRIVE" }] },
    { icon: "🤖", nom: "IA & Développement Web",    details: "Vision par ordinateur, classification d'images médicales. Développement web : HTML, CSS, JavaScript, Socket.IO, PeerJS, MySQL.", documents: [{ label: "Rapport IA", url: "LIEN_DRIVE" }] }
  ],

  certifications: [
    { issuer: "ESP Dakar",      nom: "DST — Systèmes Réseaux et Télécommunications",        desc: "Diplôme Supérieur de Technologie, ESP de Dakar.",                                                                     documents: [{ label: "Voir le diplôme",  url: "https://drive.google.com/file/d/1aWe4l9gpsZzbmXrfeGNyEdfeLX9_YXZ8/view?usp=drive_link" }] },
    { issuer: "Huawei Talent",  nom: "Data Communication and Network Technologies",          desc: "Certification officielle Huawei — compétences en communications de données et technologies réseau.",                  documents: [{ label: "Voir sur Credly",  url: "https://www.credly.com/badges/3136558c-6ac1-4dc0-a3f8-f7c587dd77c4/public_url" }] },
    { issuer: "Cisco",          nom: "Networking Devices and Initial Configuration",          desc: "Configuration initiale et gestion des équipements réseau Cisco.",                                                    documents: [{ label: "Voir sur Credly",  url: "https://www.credly.com/badges/0205924f-6922-491e-8d75-6ac754252a04/public_url" }] },
    { issuer: "Cisco",          nom: "Introduction to Cybersecurity",                         desc: "Fondamentaux de la cybersécurité : menaces, vulnérabilités, bonnes pratiques.",                                      documents: [{ label: "Voir sur Credly",  url: "https://www.credly.com/badges/dbb01867-9e4f-4f93-9e1e-03c008c1f33f/public_url" }] }
  ]

};
