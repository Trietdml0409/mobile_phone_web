import { IBlog } from "@/shared/types/common.types";

const BLOGS_DATA: IBlog[] = [
  {
    id: 1,
    title: "One-hour warranty policy",
    seo: "Tech Store Support Team",
    Published_date: "2026-03-16",
    summary:
      "Our one-hour warranty service is designed to help customers solve common product problems without waiting for many days. This guide explains who can use the service, what customers should prepare, and what happens when a repair needs more than one hour.",
    image:
      "https://www.deltarentals.com.au/wp-content/uploads/2022/01/Custom-Builder-scaled.webp",
    body: [
      {
        "What is the one-hour warranty?": {
          content:
            "The one-hour warranty helps customers solve simple product problems quickly. After the product is received at our service desk, a technician records its condition and begins the first inspection. We try to identify the cause, repair a loose connection, replace a simple faulty part, or provide a suitable solution within one working hour. The one-hour period starts after the technician accepts the product and confirms that it is eligible for this service.",
        },
      },
      {
        "Conditions of the policy": {
          content:
            "The product must have been purchased from our store and must still be inside its warranty period. Its serial number and warranty label must be readable, and the product must not show signs of water damage, heavy impact, fire, broken seals, or repair by another shop. Customers should bring the invoice, phone number, or online order number so our staff can find the purchase information quickly.",
        },
      },
      {
        "Products that can be checked quickly": {
          content:
            "The fast service is normally available for common problems involving memory, storage drives, power supplies, keyboards, mice, cables, and software drivers. Our team may also perform a quick cleaning, reconnect an internal cable, update a driver, or test a replacement component. The exact repair depends on product availability and the complexity of the reported problem.",
        },
      },
      {
        "Steps at the service counter": {
          content:
            "First, tell the employee what happened and when the problem started. The employee will inspect the outside of the product and create a warranty receipt. A technician then tests the product and explains the result. If the problem is fixed within one hour, the customer can test the product before taking it home. Always check the information on the receipt before leaving the store.",
        },
      },
      {
        "When more time is needed": {
          content:
            "Some problems require special parts, manufacturer approval, or longer stability testing. In this situation, the store cannot promise completion within one hour. Our staff will explain the initial result, provide an estimated completion time, and give the customer a receipt for the product. We will contact the customer when there is an update, so please make sure the phone number on the receipt is correct.",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Warranty policy for PC products",
    seo: "PC Warranty Department",
    Published_date: "2026-03-16",
    summary:
      "A desktop PC contains many separate components, and each component may have a different warranty period. This guide explains the hardware covered by our PC warranty, common exclusions, preparation before service, and the process used to repair or replace a faulty component.",
    image:
      "https://sm.pcmag.com/t/pcmag_au/help/j/just-got-a/just-got-a-new-pc-do-these-11-things-on-day-one_nbjm.1920.jpg",
    body: [
      {
        "PC warranty coverage": {
          content:
            "Desktop computers are covered for hardware faults caused by normal use during the warranty period. Covered parts may include the motherboard, processor, memory, storage drive, power supply, case fans, cooling system, and graphics card. Each part follows the warranty term provided by its manufacturer, so one component may remain covered after another component's warranty has ended.",
        },
      },
      {
        "Problems not covered": {
          content:
            "The warranty does not cover physical damage, liquid damage, insects, fire, unstable electricity, broken warranty labels, incorrect overclocking, or parts changed by a third party without approval from the store. Software errors, viruses, forgotten passwords, lost personal data, and cosmetic scratches that do not affect normal operation are also not treated as hardware warranty faults.",
        },
      },
      {
        "Back up your personal data": {
          content:
            "Customers are responsible for backing up documents, photographs, game saves, and other important files before sending a PC for service. Hardware testing may require the storage drive to be reset or replaced. The store will try to protect existing information, but it cannot guarantee that personal data will remain available during every repair. Remove confidential files and sign out of personal accounts whenever possible.",
        },
      },
      {
        "How to request warranty service": {
          content:
            "Write down the symptoms, back up important files, remove personal passwords, and bring the PC with its order information to the service desk. Include the power cable when the problem may be related to power. Our technician will reproduce the fault, test each likely component, and tell you which part needs repair or replacement. Do not remove the serial number or warranty labels before bringing the PC to us.",
        },
      },
      {
        "Repair and replacement time": {
          content:
            "Simple problems may be completed on the same day when replacement parts are available. Components that must be returned to a manufacturer can take longer. Our team will provide an estimated time after the first inspection and will contact the customer if that estimate changes. A replacement part may be new or manufacturer-certified and will have performance equal to or better than the original part.",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Free installation fee policy",
    seo: "Installation Service Team",
    Published_date: "2026-03-16",
    summary:
      "Customers who purchase an eligible computer can receive basic installation without an extra labour fee. The service helps the new PC work correctly from the first day and includes assembly, essential drivers, connection checks, and a short introduction to the finished system.",
    image:
      "https://www.alliedgamingpc.com.au/media/images/gaming-pc-build_au.webp",
    body: [
      {
        "Services included for free": {
          content:
            "Eligible orders receive free basic PC assembly, internal cable connection, essential driver installation, and an initial hardware test. The technician checks that the processor, memory, storage, graphics card, cooling fans, and power supply are detected correctly. The customer will also receive a short explanation about starting, restarting, and safely shutting down the new computer.",
        },
      },
      {
        "Conditions for free installation": {
          content:
            "The main computer and eligible hardware must be purchased from our store. Installation should be requested when the order is placed so the team has time to prepare. For installation at the customer's address, the work area must be safe, dry, easy to reach, and close to a stable power outlet. An adult must be present to receive the equipment and confirm that the installation is complete.",
        },
      },
      {
        "Hardware testing after assembly": {
          content:
            "After assembly, the technician starts the PC and checks the temperature, memory, storage, network connection, audio ports, display output, and USB ports. A short performance test is used to confirm that the system remains stable. If a component has a problem during this test, the team will replace or investigate it before the computer is handed to the customer.",
        },
      },
      {
        "Preparing for home installation": {
          content:
            "Before the technician arrives, customers should prepare a desk with enough ventilation and remove old equipment that blocks access. Please have the monitor, keyboard, mouse, internet information, and power sockets ready. The service does not include moving heavy furniture or changing electrical wiring, so the computer area should be ready before the appointment begins.",
        },
      },
      {
        "Extra work and software": {
          content:
            "Wall drilling, long cable routing, network construction, data transfer, data recovery, and paid software licences are not included in the free service. Complicated water-cooling systems or components purchased from another seller may also require an additional fee. If extra work is needed, the technician will explain the price and wait for the customer's agreement before starting it.",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Free shipping policy",
    seo: "Delivery Team",
    Published_date: "2026-03-16",
    summary:
      "Free standard delivery is available for qualifying PC and accessory orders in selected parts of Ho Chi Minh City and Hanoi. This article explains the supported locations, order requirements, delivery times, and the checks customers should complete when receiving valuable computer equipment.",
    image:
      "https://img.magnific.com/free-photo/red-delivery-car-deliver-express-shipping-fast-delivery-background-3d-rendering-illustration_56104-1910.jpg?semt=ais_hybrid&w=740&q=80",
    body: [
      {
        "Free shipping area": {
          content:
            "Free standard shipping is available for eligible addresses in supported urban districts of Ho Chi Minh City and Hanoi. Central districts are normally covered, while distant suburban districts may depend on the order value and delivery schedule. The delivery team will check the full address and confirm whether it is inside the free service area after the order is placed.",
        },
      },
      {
        "Order conditions": {
          content:
            "The promotion applies to orders that meet the minimum value shown at checkout and contain products sold directly by our store. The customer must provide a complete address and a working Vietnamese phone number. Large or unusually heavy items, split orders, urgent delivery, and addresses outside the supported districts may have an extra fee. Other discount codes may change whether an order qualifies for free shipping.",
        },
      },
      {
        "Delivery time in HCMC and Hanoi": {
          content:
            "Available products are usually delivered during the time agreed with the customer. Delivery may take longer during weekends, public holidays, heavy rain, traffic restrictions, or large promotional events. The driver will normally call before arriving. Same-day delivery is not guaranteed by the free shipping policy unless it is specifically confirmed on the order.",
        },
      },
      {
        "Safe transport for a desktop PC": {
          content:
            "Desktop computers are protected with suitable packaging and kept upright during transport. Large graphics cards and fragile components may receive additional internal support. Customers should keep the original box and protective material after delivery because they are useful if the computer later needs to be transported for warranty service.",
        },
      },
      {
        "Receiving the order": {
          content:
            "Customers should be available during the confirmed delivery period and prepare a safe place for the package. Check the receiver's name, number of boxes, seals, and outside condition before accepting the order. If the box is crushed, wet, opened, or seriously damaged, take photographs and contact the store immediately. For a complete PC, compare the main components with the invoice before confirming successful delivery.",
        },
      },
    ],
  },
  {
    id: 5,
    title: "How to clean and maintain your desktop PC",
    seo: "PC Care Team",
    Published_date: "2026-04-02",
    summary:
      "Regular cleaning helps a desktop computer stay cool, quiet, and reliable. This article explains how often to clean a PC and how to remove dust safely without damaging its components.",
    image:
      "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_1_master.jpg?v=6221",
    body: [
      {
        "Why PC cleaning is important": {
          content:
            "Dust slowly collects on fans, filters, and cooling fins. A large amount of dust can reduce airflow and make the processor or graphics card run at a higher temperature. The fans then spin faster and create more noise. Simple cleaning every few months can improve airflow and help the components work normally for longer.",
        },
      },
      {
        "Preparing the computer": {
          content:
            "Shut down the PC, turn off the power supply, and remove the power cable before opening the case. Move the computer to a dry and well-lit place. Touch a metal part of the case before handling internal components and avoid working on carpet because static electricity can damage sensitive hardware.",
        },
      },
      {
        "Cleaning the inside safely": {
          content:
            "Use a soft brush and short bursts of compressed air to remove dust from filters, fans, and heat sinks. Hold each fan still while cleaning it so it does not spin too quickly. Do not spray water or household cleaning liquid inside the computer, and do not use a powerful vacuum directly on the motherboard.",
        },
      },
      {
        "A simple maintenance schedule": {
          content:
            "Check the front dust filter every month and perform a more complete internal cleaning every three to six months. Homes with pets or construction dust may require more frequent cleaning. After finishing, reconnect every cable carefully and confirm that all fans work when the PC starts.",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Things to do when setting up a new PC",
    seo: "Computer Setup Team",
    Published_date: "2026-04-05",
    summary:
      "A new computer needs a few important checks before daily use. Follow these steps to install updates, protect personal information, and make sure the hardware is working correctly.",
    image:
      "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_2_master.jpg?v=6221",
    body: [
      {
        "Inspect the new computer": {
          content:
            "Before turning on the PC, inspect the case, monitor, cables, and accessories for shipping damage. Compare the components with the invoice and make sure the graphics card, memory, and storage capacity are correct. Keep the boxes and warranty documents in a safe location.",
        },
      },
      {
        "Install system updates": {
          content:
            "Connect to a trusted network and install all available operating-system updates. Restart the computer when requested and check for updates again afterward. Install current drivers for the motherboard, graphics card, Wi-Fi adapter, and other important hardware from their official manufacturers.",
        },
      },
      {
        "Protect your accounts and files": {
          content:
            "Create a strong login password and enable two-step verification for important online accounts. Remove trial applications that you do not need and turn on the built-in security tools. Avoid installing unknown programs because they may include advertisements or harmful software.",
        },
      },
      {
        "Create the first backup": {
          content:
            "Set up a backup before storing important work on the new PC. Personal documents can be copied to an external drive or a trusted cloud service. Creating a recovery drive is also useful because it can help restore the computer if the main system later fails to start.",
        },
      },
    ],
  },
  {
    id: 7,
    title: "How to choose the right graphics card",
    seo: "Gaming Hardware Team",
    Published_date: "2026-04-08",
    summary:
      "The best graphics card is not always the most expensive model. Your monitor, games, power supply, computer case, and budget should all be considered before making a decision.",
    image:
      "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_3_master.jpg?v=6221",
    body: [
      {
        "Start with your monitor": {
          content:
            "A full-HD monitor normally requires less graphics power than a 1440p or 4K monitor. Refresh rate is also important because a 144 Hz gaming monitor benefits from a card that can create more frames each second. Choose a performance level that matches the resolution and refresh rate you actually use.",
        },
      },
      {
        "Check game requirements": {
          content:
            "Look at the recommended requirements for the games or creative applications you use most often. Competitive games can run well on many mid-range cards, while modern games with high-quality textures and ray tracing may need more performance and video memory. Independent benchmark results can help compare different models.",
        },
      },
      {
        "Power and case compatibility": {
          content:
            "Check the recommended power-supply wattage and the number of power connectors required by the card. Measure the available length, width, and height inside the case because some cards are very large. The case should also have enough airflow to remove the heat created during gaming.",
        },
      },
      {
        "Balance the complete PC": {
          content:
            "A powerful graphics card can be limited by an old processor or a small amount of memory. Consider the complete computer instead of spending the entire budget on one part. A balanced PC often provides smoother performance and leaves enough money for a good power supply, storage drive, and cooling system.",
        },
      },
    ],
  },
  {
    id: 8,
    title: "A simple guide to backing up your computer",
    seo: "Data Safety Team",
    Published_date: "2026-04-11",
    summary:
      "Hardware can fail without warning, and deleted files are not always recoverable. A basic backup plan protects important documents, photographs, study files, and business information.",
    image:
      "https://theme.hstatic.net/200000420363/1001333448/14/banner_home_4_master.jpg?v=6221",
    body: [
      {
        "Files that should be protected": {
          content:
            "Begin with files that cannot easily be replaced, including personal photographs, identification documents, work projects, school assignments, and financial records. Installed games and applications can usually be downloaded again, but personal files may be permanently lost if the only storage drive stops working.",
        },
      },
      {
        "Use more than one location": {
          content:
            "A useful backup should not remain inside the same computer. Copy important data to an external drive and keep another copy in a trusted cloud service or at a different location. This provides protection from storage failure, theft, fire, and accidental deletion.",
        },
      },
      {
        "Make backups automatic": {
          content:
            "Automatic backups are more reliable because people often forget to copy files manually. Choose a regular schedule and make sure the external drive has enough free space. Cloud applications can continuously protect selected folders while the computer is connected to the internet.",
        },
      },
      {
        "Test that recovery works": {
          content:
            "A backup is only useful when its files can be restored. Open several copied files occasionally and check the date of the latest backup. Practice restoring a small folder so you understand the process before an emergency happens. Replace an external drive if it begins making unusual sounds or showing errors.",
        },
      },
    ],
  },
  {
    id: 9,
    title: "Building a comfortable gaming PC setup",
    seo: "Gaming Setup Team",
    Published_date: "2026-04-15",
    summary:
      "A comfortable gaming area is about more than computer performance. Good monitor placement, seating, lighting, cable management, and ventilation can make long sessions safer and more enjoyable.",
    image:
      "https://www.alliedgamingpc.com.au/media/images/gaming-pc-build_au.webp",
    body: [
      {
        "Position the monitor correctly": {
          content:
            "Place the monitor directly in front of the chair, approximately an arm's length away. The top of the screen should be near eye level so you do not need to bend your neck. Reduce reflections from windows and adjust brightness so the display is comfortable in the room's lighting.",
        },
      },
      {
        "Choose a supportive chair": {
          content:
            "A useful chair should support the lower back and allow both feet to rest on the floor. Adjust the seat so the elbows remain near a right angle when using the keyboard and mouse. Expensive gaming branding is less important than proper support and adjustment.",
        },
      },
      {
        "Keep the PC cool": {
          content:
            "Do not place the computer inside a closed cabinet or press its air vents against a wall. Leave space around the front, back, and top ventilation areas. Clean dust filters regularly and avoid placing the case directly on thick carpet, which can block a bottom air intake.",
        },
      },
      {
        "Organize cables and take breaks": {
          content:
            "Use simple cable ties to keep power and display cables away from feet and moving chair wheels. Avoid tightly bending cables or connecting too many high-power devices to one cheap extension board. During long gaming sessions, stand up, look away from the screen, and move regularly to reduce strain.",
        },
      },
    ],
  },
  {
    id: 10,
    title: "About TechGear Pro",
    seo: "TechGear Pro Team",
    Published_date: "2026-04-18",
    summary:
      "TechGear Pro is a technology store focused on dependable computers, components, accessories, and practical customer support. We help customers choose suitable equipment for gaming, work, study, and everyday use.",
    image:
      "https://img.magnific.com/free-vector/isometric-appliances-store-composition-with-isolated-view-supermarket-with-multimedia-electronics-loudspeakers-laptops-people-vector-illustration_98292-8708.jpg?semt=ais_hybrid&w=740&q=80",
    body: [
      {
        "Who we are": {
          content:
            "TechGear Pro is a computer and electronics retailer serving individual customers, students, gamers, offices, and small businesses. Our team brings together product advisers, computer technicians, installation staff, and customer-support employees. We want technology shopping to feel clear and comfortable, even for customers who do not already understand every technical specification.",
        },
      },
      {
        "Products for different needs": {
          content:
            "Our product selection includes complete desktop computers, computer components, monitors, keyboards, mice, storage devices, networking equipment, and other useful accessories. We offer options for simple home use, school assignments, professional work, content creation, and high-performance gaming. Customers can compare products and ask our team which configuration is suitable for their budget and daily tasks.",
        },
      },
      {
        "Our customer service": {
          content:
            "We believe good service should continue after an order has been completed. Our staff can assist with product information, basic installation, warranty requests, delivery questions, and common technical problems. When a product requires inspection, we explain the expected process and provide clear information about the next step instead of leaving the customer uncertain.",
        },
      },
      {
        "Quality and responsibility": {
          content:
            "Products are checked according to the store's procedures before they are handed to customers or prepared for delivery. We provide invoices and warranty information so customers know what support is available. Our team also encourages safe computer use, regular data backups, proper ventilation, and responsible handling of electronic equipment.",
        },
      },
      {
        "Growing with our customers": {
          content:
            "Technology changes quickly, so TechGear Pro continues to improve its product knowledge and service process. Feedback from customers helps us understand which products, policies, and support services need improvement. Our long-term goal is to become a reliable place where customers can return whenever they need a new device, an upgrade, or practical advice about their computer.",
        },
      },
    ],
  },
];

export default BLOGS_DATA;
