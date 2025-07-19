// Application data from provided JSON
const appData = {
  siteName: "Kokomo Art Association",
  tagline: "Bringing ART to the Community",
  mission: "Since 1926, the Kokomo Art Association has championed the goal of bringing art to the community by bringing the community to art.",
  contact: {
    email: "media@kaaonline.org"
  },
  venues: [
    {
      name: "Artworks Gallery",
      address: "210 N Main Street, Kokomo, IN 46901",
      phone: "(765) 459-4579",
      hours: "Mon-Fri 12:00PM-4:00PM, Sat 11:00AM-3:00PM"
    },
    {
      name: "Kokomo Art Center", 
      address: "525 W Ricketts Street, Kokomo, IN 46902",
      phone: "(765) 457-9480",
      hours: "Tue-Sat 1:00PM-4:00PM"
    }
  ],
  artists: [
    "MARILYN ALEMAN", "SHELLEY WILDER", "SARA MCCUBBIN", "DON WILKA", "DIXIE BEN-NET", 
    "STEVE CREIGHTON", "LISA ANANICH FREELAND", "LESLEY WYSONG", "MARK HOBSON", 
    "PEGGY HOBSON", "CORINNE MCAULEY", "ANGELA WALTHOUR", "RAMONA DANIELS", 
    "MICHAEL HICKEY", "CHERYL SULLIVAN", "MARITA BARBER", "TAMMY ROE", "PATRICK REDMON", 
    "ALOVEA CHADWELL", "JAN STIEGLITZ", "VIVIAN BENNETT", "KAT CLOWARD", "LANA KIRTLEY", 
    "BERTIE DAVID", "KAREN GARDNER", "KEN GARDNER", "AVON WATERS"
  ],
  classes: [
    {
      name: "Watercolor Techniques",
      instructor: "DIXIE BEN-NET",
      description: "Learn fundamental and advanced watercolor painting techniques in a supportive environment."
    },
    {
      name: "Zentangle® Basics & Beyond",
      instructor: "DON WILKA",
      fee: "$35 per class",
      description: "Certified Zentangle Teacher offers relaxing, meditative art creation. Ages 8+ with adult."
    },
    {
      name: "Junk Journaling",
      instructor: "VIVIAN BENNETT",
      description: "Create handmade journals using recycled and repurposed materials."
    },
    {
      name: "Digital Photography",
      instructor: "BOB DAWSON",
      description: "Learn fundamentals of digital photography and composition."
    },
    {
      name: "Pastels",
      instructor: "AVON WATERS",
      description: "Explore the vibrant world of pastel painting techniques."
    },
    {
      name: "Drawing & Painting",
      instructor: "MARILYN ALEMAN",
      description: "Foundational skills in drawing and painting for all levels."
    },
    {
      name: "Sip & Paint Parties",
      instructor: "RAMONA DANIELS",
      description: "Relaxed social painting sessions perfect for beginners."
    },
    {
      name: "Pottery",
      instructor: "MARILYN ALEMAN", 
      description: "Hand-building and wheel throwing ceramic techniques."
    }
  ],
  events: [
    {
      title: "Recycled Art Show",
      dates: "March 7 - April 25, 2025",
      venue: "Artworks Gallery",
      description: "Juried show featuring artwork made with 80% recycled materials. Receptions March 7 & April 4.",
      details: "70/30 commission split (75/25 for members). Art delivery March 1, pickup April 26."
    },
    {
      title: "Junk Journal Workshop", 
      date: "March 15, 2025",
      time: "12:00PM - 4:00PM",
      venue: "Artworks Gallery",
      instructor: "VIVIAN BENNETT",
      fee: "$62.50 (includes materials)",
      description: "Create handmade journals using recycled materials. Limited spots, registration required."
    },
    {
      title: "97th Annual Spring Art Show",
      dates: "Late May - June 1, 2025", 
      venue: "Kokomo Art Center",
      hours: "Tue-Sat 1:00PM-4:00PM",
      description: "Annual juried exhibition featuring local and regional artists. Closing reception June 1 at 2:00PM."
    }
  ],
  membership: [
    {
      level: "Student",
      fee: "$15",
      benefits: ["Commission-free First Friday sales", "Website artist listing", "Workshop discounts"]
    },
    {
      level: "Individual", 
      fee: "$29",
      benefits: ["Commission-free First Friday sales", "Website artist listing", "Workshop discounts", "Newsletter subscription"]
    },
    {
      level: "Business",
      fee: "$99", 
      benefits: ["Business website listing", "10% gallery rental discount", "First Friday advertising", "Newsletter subscription"]
    },
    {
      level: "Friends of Art",
      fee: "$500",
      benefits: ["Enhanced website sponsor listing", "20% gallery rental discount", "All Business benefits"]
    },
    {
      level: "Corporate Sponsor",
      fee: "$1,000",
      benefits: ["Company logo in newsletter", "30% gallery rental discount", "All previous benefits"]
    },
    {
      level: "Golden Palette Sponsor", 
      fee: "$1,500",
      benefits: ["One free 4-hour gallery rental annually", "All Corporate Sponsor benefits"]
    }
  ],
  sponsorship: [
    {
      tier: "Gallery Patron",
      investment: "$250+",
      benefits: ["Name listed on Thank You page", "Social media recognition"]
    },
    {
      tier: "Exhibition Sponsor",
      investment: "$500+", 
      benefits: ["Logo on exhibition marketing", "Homepage logo during exhibition", "All Gallery Patron benefits"]
    },
    {
      tier: "Season Partner",
      investment: "$1,000+",
      benefits: ["Homepage logo for entire year", "Featured social media posts", "Press release inclusion", "All previous benefits"]
    }
  ]
};

// DOM elements
let hamburger, navOverlay, navClose, modal, modalClose, modalTitle, modalBody;
let lastFocusedElement = null;
let isScrolling = false;

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing KAA website...');
  
  // Wait a moment for all elements to be available
  setTimeout(() => {
    try {
      initializeElements();
      initializeNavigation(); 
      populateContent();
      initializeScrollAnimations();
      initializeParallax();
      initializeModal();
      initializeAccordion();
      initializeContactForm();
      initializeKeyboardNavigation();
      initializeSmoothScroll();
      
      console.log('✅ Kokomo Art Association website fully initialized');
    } catch (error) {
      console.error('❌ Error during initialization:', error);
    }
  }, 200);
});

// Initialize DOM elements with error checking
function initializeElements() {
  console.log('🔍 Finding DOM elements...');
  
  hamburger = document.getElementById('hamburger');
  navOverlay = document.getElementById('navOverlay');
  navClose = document.getElementById('navClose');
  modal = document.getElementById('artistModal');
  modalClose = document.getElementById('modalClose');
  modalTitle = document.getElementById('modalTitle');
  modalBody = document.getElementById('modalBody');
  
  console.log('📋 Element status:', {
    hamburger: hamburger ? '✅' : '❌',
    navOverlay: navOverlay ? '✅' : '❌',
    navClose: navClose ? '✅' : '❌',
    modal: modal ? '✅' : '❌',
    modalClose: modalClose ? '✅' : '❌',
    modalTitle: modalTitle ? '✅' : '❌',
    modalBody: modalBody ? '✅' : '❌'
  });
  
  // Ensure modal is hidden initially
  if (modal) {
    modal.setAttribute('hidden', '');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
  }
}

// Navigation functionality with improved error handling
function initializeNavigation() {
  console.log('🧭 Initializing navigation...');
  
  if (hamburger) {
    console.log('🍔 Adding hamburger menu listener');
    hamburger.addEventListener('click', function(e) {
      console.log('🍔 Hamburger clicked!');
      e.preventDefault();
      e.stopPropagation();
      toggleNavOverlay();
    });
  } else {
    console.error('❌ Hamburger menu element not found');
  }
  
  if (navClose) {
    console.log('✖️ Adding nav close listener');
    navClose.addEventListener('click', function(e) {
      console.log('✖️ Nav close clicked!');
      e.preventDefault();
      e.stopPropagation();
      closeNavOverlay();
    });
  } else {
    console.error('❌ Nav close element not found');
  }
  
  // Navigation links
  const navLinks = document.querySelectorAll('.nav-menu a');
  console.log(`🔗 Found ${navLinks.length} navigation links`);
  
  navLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
      console.log(`🔗 Nav link ${index + 1} clicked:`, this.getAttribute('href'));
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        closeNavOverlay();
        
        setTimeout(() => {
          const headerOffset = 80;
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 300);
      }
    });
  });
  
  // Close overlay when clicking outside
  if (navOverlay) {
    navOverlay.addEventListener('click', function(e) {
      if (e.target === navOverlay) {
        console.log('🎯 Clicked outside nav overlay - closing');
        closeNavOverlay();
      }
    });
  }
}

// Toggle navigation overlay
function toggleNavOverlay() {
  console.log('🔄 Toggling navigation overlay...');
  
  if (!navOverlay || !hamburger) {
    console.error('❌ Navigation elements missing');
    return;
  }
  
  const isActive = navOverlay.classList.contains('active');
  console.log('📊 Nav overlay currently active:', isActive);
  
  if (isActive) {
    closeNavOverlay();
  } else {
    openNavOverlay();
  }
}

// Open navigation overlay
function openNavOverlay() {
  console.log('🚀 Opening navigation overlay...');
  
  if (!navOverlay || !hamburger) {
    console.error('❌ Cannot open - elements missing');
    return;
  }
  
  navOverlay.classList.add('active');
  navOverlay.removeAttribute('hidden');
  navOverlay.setAttribute('aria-hidden', 'false');
  hamburger.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  
  document.body.style.overflow = 'hidden';
  
  if (navClose) {
    setTimeout(() => {
      navClose.focus();
    }, 300);
  }
  
  console.log('✅ Navigation overlay opened');
}

// Close navigation overlay
function closeNavOverlay() {
  console.log('🚪 Closing navigation overlay...');
  
  if (!navOverlay || !hamburger) {
    console.error('❌ Cannot close - elements missing');
    return;
  }
  
  navOverlay.classList.remove('active');
  navOverlay.setAttribute('hidden', '');
  navOverlay.setAttribute('aria-hidden', 'true');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  
  document.body.style.overflow = 'auto';
  
  console.log('✅ Navigation overlay closed');
}

// Populate content from data
function populateContent() {
  console.log('🎨 Populating content...');
  
  try {
    populateGalleries();
    populateArtists();
    populateClasses();
    populateMembership();
    populateEvents();
    populateSponsors();
    console.log('✅ All content populated successfully');
  } catch (error) {
    console.error('❌ Error populating content:', error);
  }
}

// Populate galleries
function populateGalleries() {
  const galleriesGrid = document.getElementById('galleriesGrid');
  if (!galleriesGrid) {
    console.error('❌ Galleries grid not found');
    return;
  }
  
  console.log('🏛️ Populating galleries...');
  
  appData.venues.forEach(venue => {
    const galleryCard = document.createElement('div');
    galleryCard.className = 'card';
    galleryCard.innerHTML = `
      <div class="card__body">
        <h3>${venue.name}</h3>
        <p><strong>Address:</strong> ${venue.address}</p>
        <p><strong>Phone:</strong> ${venue.phone}</p>
        <p><strong>Hours:</strong> ${venue.hours}</p>
        <a href="mailto:${appData.contact.email}?subject=Gallery%20Information%20-%20${encodeURIComponent(venue.name)}" class="btn btn--outline mt-8">Get Directions</a>
      </div>
    `;
    galleriesGrid.appendChild(galleryCard);
  });

  // Add Artist Alley card
  const artistAlleyCard = document.createElement('div');
  artistAlleyCard.className = 'card';
  artistAlleyCard.innerHTML = `
    <div class="card__body">
      <h3>Artist Alley</h3>
      <p>Dynamic outdoor venue showcasing rotating public art installations throughout the community.</p>
      <p><strong>Features:</strong> Rotating exhibitions, community accessible art displays</p>
      <a href="mailto:${appData.contact.email}?subject=Artist%20Alley%20Information" class="btn btn--outline mt-8">Learn More</a>
    </div>
  `;
  galleriesGrid.appendChild(artistAlleyCard);
  
  console.log('✅ Galleries populated');
}

// Populate artists with improved event handling
function populateArtists() {
  const artistsGrid = document.getElementById('artistsGrid');
  if (!artistsGrid) {
    console.error('❌ Artists grid not found');
    return;
  }
  
  console.log('👨‍🎨 Populating artists...');
  
  appData.artists.forEach((artist, index) => {
    const artistCard = document.createElement('div');
    artistCard.className = 'card artist-card';
    artistCard.setAttribute('data-artist', artist);
    artistCard.innerHTML = `
      <div class="card__body">
        <h3>${artist}</h3>
        <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">Click to learn more</p>
      </div>
    `;
    
    artistCard.setAttribute('tabindex', '0');
    artistCard.setAttribute('role', 'button');
    artistCard.setAttribute('aria-label', `Learn more about ${artist}`);
    artistCard.style.cursor = 'pointer';
    
    // Add click event listener immediately
    artistCard.addEventListener('click', function(e) {
      console.log('🎨 Artist card clicked:', artist);
      e.preventDefault();
      e.stopPropagation();
      openArtistModal(artist);
    });
    
    artistCard.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        console.log('⌨️ Artist card key pressed:', artist);
        e.preventDefault();
        e.stopPropagation();
        openArtistModal(artist);
      }
    });
    
    artistsGrid.appendChild(artistCard);
  });
  
  console.log(`✅ ${appData.artists.length} artists populated with click handlers`);
}

// Populate classes with immediate event handling
function populateClasses() {
  const classesAccordion = document.getElementById('classesAccordion');
  if (!classesAccordion) {
    console.error('❌ Classes accordion not found');
    return;
  }
  
  console.log('📚 Populating classes...');
  
  appData.classes.forEach((classData, index) => {
    const classItem = document.createElement('div');
    classItem.className = 'class-item';
    classItem.innerHTML = `
      <div class="class-header" role="button" tabindex="0" aria-expanded="false" aria-controls="class-content-${index}" data-class-index="${index}">
        <div>
          <h3>${classData.name}</h3>
          <div class="class-instructor">with ${classData.instructor}</div>
          ${classData.fee ? `<div style="color: var(--color-primary); font-size: var(--font-size-sm); margin-top: 4px;">${classData.fee}</div>` : ''}
        </div>
        <div class="class-toggle">+</div>
      </div>
      <div id="class-content-${index}" class="class-content" role="region" aria-labelledby="class-header-${index}">
        <p>${classData.description}</p>
        <a href="mailto:${appData.contact.email}?subject=Class%20Registration%20-%20${encodeURIComponent(classData.name)}" class="btn btn--primary mt-8">Register for Class</a>
      </div>
    `;
    
    // Add event listeners immediately after creating the element
    const header = classItem.querySelector('.class-header');
    if (header) {
      header.addEventListener('click', function(e) {
        console.log('📚 Class header clicked:', classData.name);
        e.preventDefault();
        e.stopPropagation();
        toggleAccordion(header);
      });
      
      header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          console.log('⌨️ Class header key pressed:', classData.name);
          e.preventDefault();
          e.stopPropagation();
          toggleAccordion(header);
        }
      });
    }
    
    classesAccordion.appendChild(classItem);
  });
  
  console.log(`✅ ${appData.classes.length} classes populated with accordion handlers`);
}

// Populate membership
function populateMembership() {
  const membershipGrid = document.getElementById('membershipGrid');
  if (!membershipGrid) {
    console.error('❌ Membership grid not found');
    return;
  }
  
  console.log('💳 Populating membership...');
  
  appData.membership.forEach(level => {
    const membershipCard = document.createElement('div');
    membershipCard.className = 'membership-card card';
    membershipCard.innerHTML = `
      <div class="card__body">
        <h3>${level.level}</h3>
        <div class="membership-price">${level.fee}</div>
        <ul class="membership-benefits">
          ${level.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
        <a href="mailto:${appData.contact.email}?subject=Membership%20Inquiry%20-%20${encodeURIComponent(level.level)}" class="btn btn--primary">Join Now</a>
      </div>
    `;
    membershipGrid.appendChild(membershipCard);
  });
  
  console.log('✅ Membership populated');
}

// Populate events
function populateEvents() {
  const eventsGrid = document.getElementById('eventsGrid');
  if (!eventsGrid) {
    console.error('❌ Events grid not found');
    return;
  }
  
  console.log('🎪 Populating events...');
  
  appData.events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'card';
    
    let dateInfo = '';
    if (event.dates) dateInfo = `<p style="color: var(--color-primary); font-weight: 600; margin-bottom: var(--space-8);">${event.dates}</p>`;
    if (event.date) dateInfo = `<p style="color: var(--color-primary); font-weight: 600; margin-bottom: var(--space-8);">${event.date}</p>`;
    if (event.time) dateInfo += `<p style="color: var(--color-text-secondary); font-size: var(--font-size-sm); margin-bottom: var(--space-8);">${event.time}</p>`;
    
    eventCard.innerHTML = `
      <div class="card__body">
        <h3>${event.title}</h3>
        ${dateInfo}
        ${event.venue ? `<p><strong>Venue:</strong> ${event.venue}</p>` : ''}
        ${event.instructor ? `<p><strong>Instructor:</strong> ${event.instructor}</p>` : ''}
        ${event.fee ? `<p><strong>Fee:</strong> ${event.fee}</p>` : ''}
        ${event.hours ? `<p><strong>Hours:</strong> ${event.hours}</p>` : ''}
        <p>${event.description}</p>
        ${event.details ? `<p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: var(--space-8);">${event.details}</p>` : ''}
        <a href="mailto:${appData.contact.email}?subject=Event%20Information%20-%20${encodeURIComponent(event.title)}" class="btn btn--outline mt-8">Learn More</a>
      </div>
    `;
    eventsGrid.appendChild(eventCard);
  });
  
  console.log('✅ Events populated');
}

// Populate sponsors
function populateSponsors() {
  const sponsorsGrid = document.getElementById('sponsorsGrid');
  if (!sponsorsGrid) {
    console.error('❌ Sponsors grid not found');
    return;
  }
  
  console.log('🤝 Populating sponsors...');
  
  appData.sponsorship.forEach(tier => {
    const sponsorCard = document.createElement('div');
    sponsorCard.className = 'card';
    sponsorCard.innerHTML = `
      <div class="card__body">
        <h3>${tier.tier}</h3>
        <div style="color: var(--color-primary); font-size: var(--font-size-xl); font-weight: 600; margin-bottom: var(--space-16);">${tier.investment}</div>
        <ul style="list-style: none; padding: 0; margin-bottom: var(--space-24);">
          ${tier.benefits.map(benefit => `<li style="padding: var(--space-8) 0; border-bottom: 1px solid var(--color-border); position: relative; padding-left: var(--space-20);"><span style="position: absolute; left: 0; color: var(--color-primary); font-weight: bold;">✓</span>${benefit}</li>`).join('')}
        </ul>
        <a href="mailto:${appData.contact.email}?subject=Sponsorship%20Inquiry%20-%20${encodeURIComponent(tier.tier)}" class="btn btn--primary">Become a Sponsor</a>
      </div>
    `;
    sponsorsGrid.appendChild(sponsorCard);
  });
  
  console.log('✅ Sponsors populated');
}

// Modal functionality with error checking
function initializeModal() {
  console.log('🪟 Initializing modal...');
  
  if (!modal || !modalClose) {
    console.error('❌ Modal elements not found - modal functionality disabled');
    return;
  }
  
  modalClose.addEventListener('click', function(e) {
    console.log('✖️ Modal close clicked');
    e.preventDefault();
    e.stopPropagation();
    closeArtistModal();
  });
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      console.log('🎯 Modal background clicked');
      closeArtistModal();
    }
  });
  
  console.log('✅ Modal initialized');
}

// Open artist modal with better error handling
function openArtistModal(artistName) {
  console.log('🚀 Opening artist modal for:', artistName);
  
  if (!modal) {
    console.error('❌ Modal element not found');
    showNotification(`Sorry, unable to display information for ${artistName}. Please contact us directly.`, 'error');
    return;
  }
  
  if (!modalTitle || !modalBody) {
    console.error('❌ Modal content elements not found');
    return;
  }
  
  lastFocusedElement = document.activeElement;
  
  modalTitle.textContent = artistName;
  modalBody.innerHTML = `
    <p>This talented artist is a valued member of the Kokomo Art Association. Each artist brings their unique perspective and creative vision to our vibrant community.</p>
    <p>To learn more about ${artistName}'s work, view their portfolio, inquire about purchasing their art, or discuss commission opportunities, please contact us.</p>
    <p><strong>Contact:</strong> <a href="mailto:${appData.contact.email}?subject=Artist%20Inquiry%20-%20${encodeURIComponent(artistName)}">${appData.contact.email}</a></p>
  `;
  
  modal.removeAttribute('hidden');
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';
  
  document.body.style.overflow = 'hidden';
  
  setTimeout(() => {
    if (modalClose) {
      modalClose.focus();
    }
  }, 100);
  
  console.log('✅ Artist modal opened');
}

// Close artist modal
function closeArtistModal() {
  console.log('🚪 Closing artist modal');
  
  if (!modal) {
    console.error('❌ Modal element not found');
    return;
  }
  
  modal.setAttribute('hidden', '');
  modal.setAttribute('aria-hidden', 'true');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  
  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
  
  console.log('✅ Artist modal closed');
}

// Accordion functionality - now handled directly in populateClasses
function initializeAccordion() {
  console.log('🪗 Accordion initialization handled during content population');
}

// Toggle accordion
function toggleAccordion(header) {
  console.log('🔄 Toggling accordion...');
  
  const content = header.nextElementSibling;
  const toggle = header.querySelector('.class-toggle');
  const isExpanded = header.getAttribute('aria-expanded') === 'true';
  
  console.log('📊 Accordion currently expanded:', isExpanded);
  
  if (isExpanded) {
    // Close accordion
    content.classList.remove('active');
    toggle.textContent = '+';
    header.setAttribute('aria-expanded', 'false');
    header.classList.remove('active');
    console.log('📕 Accordion closed');
  } else {
    // Close all other accordions first
    document.querySelectorAll('.class-content.active').forEach(activeContent => {
      activeContent.classList.remove('active');
      const activeHeader = activeContent.previousElementSibling;
      const activeToggle = activeHeader.querySelector('.class-toggle');
      if (activeToggle) activeToggle.textContent = '+';
      activeHeader.setAttribute('aria-expanded', 'false');
      activeHeader.classList.remove('active');
    });
    
    // Open current accordion
    content.classList.add('active');
    toggle.textContent = '×';
    header.setAttribute('aria-expanded', 'true');
    header.classList.add('active');
    console.log('📖 Accordion opened');
  }
}

// Contact form functionality with improved validation
function initializeContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) {
    console.error('❌ Contact form not found');
    return;
  }
  
  console.log('📧 Initializing contact form...');
  
  contactForm.addEventListener('submit', function(e) {
    console.log('📤 Contact form submitted');
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (!nameInput || !emailInput || !messageInput) {
      console.error('❌ Form input elements not found');
      showNotification('Form error: Please refresh the page and try again.', 'error');
      return;
    }
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    console.log('📝 Form data:', { name: !!name, email: !!email, message: !!message });
    
    // Validation
    if (!name || !email || !message) {
      showNotification('Please fill in all fields.', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }
    
    // Create mailto link with form data
    const subject = encodeURIComponent('Contact Form Submission from KAA Website');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:${appData.contact.email}?subject=${subject}&body=${body}`;
    
    console.log('📬 Opening email client...');
    
    // Try to open email client
    try {
      window.open(mailtoLink, '_self');
      
      // Reset form and show success message
      contactForm.reset();
      showNotification('Thank you for your message! Your email client should open now.', 'success');
      console.log('✅ Contact form processed successfully');
    } catch (error) {
      console.error('❌ Error opening email client:', error);
      showNotification('Unable to open email client. Please email us directly at ' + appData.contact.email, 'error');
    }
  });
  
  console.log('✅ Contact form initialized');
}

// Scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.fade-section').forEach(section => {
    observer.observe(section);
  });
  
  // Staggered card animations
  setTimeout(() => {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          cardObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.card, .timeline-item').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
      cardObserver.observe(card);
    });
  }, 1000);
}

// Parallax scrolling
function initializeParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  if (parallaxElements.length === 0) return;
  
  function updateParallax() {
    if (isScrolling) return;
    
    isScrolling = true;
    
    requestAnimationFrame(() => {
      const scrollTop = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.dataset.parallax) || 0.5;
        const yPos = -(scrollTop * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
      
      isScrolling = false;
    });
  }
  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
}

// Keyboard navigation
function initializeKeyboardNavigation() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (modal && !modal.hasAttribute('hidden')) {
        closeArtistModal();
      } else if (navOverlay && navOverlay.classList.contains('active')) {
        closeNavOverlay();
      }
    }
  });
  
  // Modal focus trap
  if (modal) {
    modal.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }
}

// Smooth scroll for anchor links
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Show notification with better styling
function showNotification(message, type = 'info') {
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 24px;
    background: var(--color-surface);
    color: var(--color-text);
    padding: 16px 24px;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 2001;
    backdrop-filter: blur(10px);
    max-width: 400px;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    font-size: 14px;
    line-height: 1.4;
  `;
  
  if (type === 'error') {
    notification.style.borderColor = '#ff5459';
    notification.style.background = 'rgba(255, 84, 89, 0.1)';
  } else if (type === 'success') {
    notification.style.borderColor = 'var(--color-primary)';
    notification.style.background = 'rgba(212, 175, 55, 0.1)';
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Handle window resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    closeNavOverlay();
  }
});

// Performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Global error handling
window.addEventListener('error', function(e) {
  console.error('Global error caught:', e.error);
});

console.log('🚀 KAA JavaScript loaded successfully');
