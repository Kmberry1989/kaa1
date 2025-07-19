// Application data from JSON
const appData = {
  kaa_info: {
    name: "Kokomo Art Association",
    founded: 1926,
    mission: "To bring art to the community and bring the community to art.",
    contact: "media@kaaonline.org",
    venues: [
      {
        name: "Kokomo Art Center",
        address: "525 W. Ricketts Street, Kokomo, IN 46902",
        phone: "(765) 457-9480",
        hours: "Tuesday-Saturday 1pm-4pm"
      },
      {
        name: "Artworks Gallery", 
        address: "210 N. Main Street, Kokomo, IN 46901",
        phone: "(765) 459-4579",
        hours: "Monday-Friday 12pm-4pm Saturday 11pm-3pm"

      },
      {
        name: "Artist Alley",
        description: "Dynamic outdoor venue showcasing rotating public art"
      }
    ]
  },
  artists: [
    "MARILYN ALEMAN", "SHELLEY WILDER", "SARA MCCUBBIN", "DON WILKA", "DIXIE BEN-NET", "STEVE CREIGHTON", "LISA ANANICH FREELAND", "LESLEY WYSONG", "MARK HOBSON", "PEGGY HOBSON", "CORINNE MCAULEY", "ANGELA WALTHOUR", "RAMONA DANIELS", "MICHAEL HICKEY", "CHERYL SULLIVAN", "MARITA BARBER", "TAMMY ROE", "PATRICK REDMON", "ALOVEA CHADWELL", "JAN STIEGLITZ", "VIVIAN BENNETT", "KAT CLOWARD", "LANA KIRTLEY", "BERTIE DAVID", "KAREN GARDNER", "KEN GARDNER", "AVON WATERS"
  ],
  classes: [
    {
      name: "Watercolor Classes",
      description: "Explore the fluid beauty of watercolor painting with expert instruction.",
      instructor: "Various Artists"
    },
    {
      name: "Zentangle® Classes", 
      description: "Learn the meditative art of Zentangle® with certified instructor Don Wilka.",
      instructor: "Don Wilka",
      email: "drwilka@gmail.com"
    },
    {
      name: "Junk Journaling",
      description: "Transform everyday materials into beautiful art journals and mixed media pieces."
    },
    {
      name: "Oil Painting Workshop",
      description: "Master traditional oil painting techniques in a supportive environment."
    },
    {
      name: "Acrylic Painting",
      description: "Discover the versatility of acrylic paints in this hands-on workshop."
    },
    {
      name: "Drawing Fundamentals",
      description: "Build essential drawing skills with pencil, charcoal, and mixed media."
    },
    {
      name: "Mixed Media Art",
      description: "Combine various materials and techniques to create unique artistic expressions."
    },
    {
      name: "Pottery & Ceramics",
      description: "Work with clay to create functional and decorative ceramic pieces."
    },
    {
      name: "Digital Art Workshop",
      description: "Explore digital art creation using modern software and techniques."
    }
  ],
  membership_levels: [
    {
      name: "Student",
      fee: "$15",
      benefits: ["Display and sell art commission-free during First Fridays", "20% commission on Holiday Show sales", "Artist listing on KAA website", "Workshop discounts"]
    },
    {
      name: "Individual", 
      fee: "$29",
      benefits: ["Display and sell art commission-free during First Fridays", "20% commission on Holiday Show sales", "Artist listing on KAA website", "Workshop discounts"]
    },
    {
      name: "Business",
      fee: "$99", 
      benefits: ["Business listing on KAA website", "10% discount on gallery rentals", "First Friday advertising opportunities", "Monthly KAA Newsletter"]
    },
    {
      name: "Friends of Art",
      fee: "$500",
      benefits: ["All Business benefits", "Enhanced sponsor listing for one year", "20% discount on gallery rentals"]
    },
    {
      name: "Corporate Sponsor",
      fee: "$1,000",
      benefits: ["All Business benefits", "Logo in monthly newsletter for one year", "30% discount on gallery rentals"]
    },
    {
      name: "Golden Palette Sponsor",
      fee: "$1,500", 
      benefits: ["All Corporate Sponsor benefits", "One free 4-hour gallery rental per year"]
    }
  ],
  events: [
    {
      name: "Splash of Watercolor Exhibition",
      description: "Current exhibition featuring watercolor works by local artists",
      status: "Current"
    },
    {
      name: "Holiday Bazaar 2025",
      description: "Annual holiday shopping event featuring handmade art and crafts",
      date: "December 2025"
    },
    {
      name: "Photo Show 2025", 
      description: "Photography exhibition showcasing local photographers",
      date: "Spring 2025"
    },
    {
      name: "Recycled Art Show 2025",
      description: "Creative works made from recycled and repurposed materials",
      date: "Earth Day 2025"
    },
    {
      name: "Paper Cutting Workshop",
      description: "Learn traditional paper cutting techniques and create intricate designs"
    },
    {
      name: "Trash to Treasure Workshop", 
      description: "Transform discarded materials into beautiful art pieces"
    }
  ],
 
  timeline: [
    {year: "1926", event: "Kokomo Art Association founded by local artists and patrons"},
    {year: "1930s-1940s", event: "Early exhibits held in community halls and borrowed storefronts"},
    {year: "1950s", event: "KAA establishes permanent home with first gallery space in downtown Kokomo"},
    {year: "1975", event: "Kokomo Art Center opens as central hub for workshops and exhibitions"},
    {year: "1995", event: "Artworks Gallery launches, expanding display opportunities"},
    {year: "2010", event: "Artist Alley created as dynamic outdoor venue for public art"},
    {year: "Today", event: "KAA serves as gathering place for artists, families, students, and supporters"}
  ]
};

// DOM elements
let menuToggle, navOverlay, navClose, modal, modalClose, modalTitle, modalBody;
let lastFocusedElement = null;
let isScrolling = false;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  // Wait a moment for DOM to be fully ready
  setTimeout(() => {
    initializeElements();
    initializeNavigation();
    populateContent();
    initializeScrollAnimations();
    initializeParallax();
    initializeModal();
    initializeAccordion();
    initializeContactForm();
    initializeKeyboardNavigation();
    initializeHeaderScrollEffect();
    initializeSmoothScroll();
    
    // Remove loading state
    document.body.classList.remove('loading');
  }, 100);
});

// Initialize DOM elements
function initializeElements() {
  menuToggle = document.getElementById('menuToggle');
  navOverlay = document.getElementById('navOverlay');
  navClose = document.getElementById('navClose');
  modal = document.getElementById('artistModal');
  modalClose = document.getElementById('modalClose');
  modalTitle = document.getElementById('artistModalTitle');
  modalBody = document.getElementById('artistModalBody');
  
  console.log('Elements initialized:', {
    menuToggle: !!menuToggle,
    navOverlay: !!navOverlay,
    navClose: !!navClose,
    modal: !!modal
  });
  
  // Ensure modal is hidden initially
  if (modal) {
    modal.setAttribute('hidden', '');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
  }
}

// Navigation functionality
function initializeNavigation() {
  console.log('Initializing navigation...');
  
  // Menu toggle functionality
  if (menuToggle) {
    console.log('Adding click listener to menu toggle');
    menuToggle.addEventListener('click', function(e) {
      console.log('Menu toggle clicked');
      e.preventDefault();
      e.stopPropagation();
      toggleNavOverlay();
    });
  } else {
    console.error('Menu toggle not found');
  }
  
  // Close navigation
  if (navClose) {
    navClose.addEventListener('click', function(e) {
      console.log('Nav close clicked');
      e.preventDefault();
      e.stopPropagation();
      closeNavOverlay();
    });
  }
  
  // Navigation links
  const navLinks = document.querySelectorAll('.nav-overlay__list a');
  console.log('Found nav links:', navLinks.length);
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Nav link clicked:', this.getAttribute('href'));
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        closeNavOverlay();
        
        // Smooth scroll to target with offset for fixed header
        const headerOffset = 80;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Close overlay when clicking outside
  if (navOverlay) {
    navOverlay.addEventListener('click', function(e) {
      if (e.target === navOverlay) {
        closeNavOverlay();
      }
    });
  }
}

// Toggle navigation overlay
function toggleNavOverlay() {
  console.log('Toggling nav overlay');
  
  if (!navOverlay || !menuToggle) {
    console.error('Navigation elements not found');
    return;
  }
  
  const isActive = navOverlay.classList.contains('active');
  console.log('Nav overlay is active:', isActive);
  
  if (isActive) {
    closeNavOverlay();
  } else {
    openNavOverlay();
  }
}

// Open navigation overlay
function openNavOverlay() {
  console.log('Opening nav overlay');
  
  if (!navOverlay || !menuToggle) {
    console.error('Navigation elements not found');
    return;
  }
  
  navOverlay.classList.add('active');
  navOverlay.removeAttribute('hidden');
  navOverlay.setAttribute('aria-hidden', 'false');
  menuToggle.classList.add('active');
  menuToggle.setAttribute('aria-expanded', 'true');
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Focus management
  if (navClose) {
    setTimeout(() => {
      navClose.focus();
    }, 300);
  }
}

// Close navigation overlay
function closeNavOverlay() {
  console.log('Closing nav overlay');
  
  if (!navOverlay || !menuToggle) {
    console.error('Navigation elements not found');
    return;
  }
  
  navOverlay.classList.remove('active');
  navOverlay.setAttribute('hidden', '');
  navOverlay.setAttribute('aria-hidden', 'true');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
  
  // Restore body scroll
  document.body.style.overflow = 'auto';
}

// Populate content from data
function populateContent() {
  console.log('Populating content...');
  populateTimeline();
  populateGalleries();
  populateArtists();
  populateClasses();
  populateMembership();
  populateEvents();
  populateSponsors();
}

// Populate timeline
function populateTimeline() {
  const timelineContainer = document.getElementById('timeline');
  if (!timelineContainer) return;
  
  appData.timeline.forEach((item, index) => {
    const timelineItem = document.createElement('li');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-event">${item.event}</div>
    `;
    
    // Add staggered animation delay
    timelineItem.style.animationDelay = `${index * 0.1}s`;
    
    timelineContainer.appendChild(timelineItem);
  });
}

// Populate galleries
function populateGalleries() {
  const galleriesGrid = document.getElementById('galleriesGrid');
  if (!galleriesGrid) return;
  
  appData.kaa_info.venues.forEach(venue => {
    const galleryCard = document.createElement('div');
    galleryCard.className = 'card';
    galleryCard.innerHTML = `
      <div class="card__body">
        <h3>${venue.name}</h3>
        ${venue.address ? `<p><strong>Address:</strong> ${venue.address}</p>` : ''}
        ${venue.phone ? `<p><strong>Phone:</strong> ${venue.phone}</p>` : ''}
        ${venue.hours ? `<p><strong>Hours:</strong> ${venue.hours}</p>` : ''}
        ${venue.description ? `<p>${venue.description}</p>` : ''}
      </div>
    `;
    galleriesGrid.appendChild(galleryCard);
  });
}

// Populate artists
function populateArtists() {
  const artistsGrid = document.getElementById('artistsGrid');
  if (!artistsGrid) return;
  
  console.log('Populating artists...');
  
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
    
    artistsGrid.appendChild(artistCard);
  });
  
  // Add event listeners after all cards are created
  setTimeout(() => {
    const artistCards = document.querySelectorAll('.artist-card');
    console.log('Found artist cards:', artistCards.length);
    
    artistCards.forEach(card => {
      const artist = card.getAttribute('data-artist');
      
      card.addEventListener('click', function(e) {
        console.log('Artist card clicked:', artist);
        e.preventDefault();
        e.stopPropagation();
        openArtistModal(artist);
      });
      
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          console.log('Artist card key pressed:', artist);
          e.preventDefault();
          e.stopPropagation();
          openArtistModal(artist);
        }
      });
    });
  }, 100);
}

// Populate classes
function populateClasses() {
  const classesList = document.getElementById('classesList');
  if (!classesList) return;
  
  console.log('Populating classes...');
  
  appData.classes.forEach((classData, index) => {
    const classItem = document.createElement('div');
    classItem.className = 'class-item';
    classItem.innerHTML = `
      <div class="class-header" role="button" tabindex="0" aria-expanded="false" aria-controls="class-content-${index}" data-class-index="${index}">
        <div>
          <h3>${classData.name}</h3>
          ${classData.instructor ? `<div class="class-instructor">with ${classData.instructor}</div>` : ''}
        </div>
        <div class="class-toggle">+</div>
      </div>
      <div id="class-content-${index}" class="class-content" role="region" aria-labelledby="class-header-${index}">
        <p>${classData.description}</p>
        ${classData.email ? `<p><strong>Contact:</strong> <a href="mailto:${classData.email}">${classData.email}</a></p>` : ''}
        <a href="mailto:media@kaaonline.org?subject=Class%20Registration%20-%20${encodeURIComponent(classData.name)}" class="btn btn--primary mt-8">Register for Class</a>
      </div>
    `;
    
    classesList.appendChild(classItem);
  });
}

// Populate membership
function populateMembership() {
  const membershipGrid = document.getElementById('membershipGrid');
  if (!membershipGrid) return;
  
  appData.membership_levels.forEach(level => {
    const membershipCard = document.createElement('div');
    membershipCard.className = 'membership-card card';
    membershipCard.innerHTML = `
      <div class="card__body">
        <h3>${level.name}</h3>
        <div class="membership-price">${level.fee}</div>
        <ul class="membership-benefits">
          ${level.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
        <a href="mailto:media@kaaonline.org?subject=Membership%20Inquiry%20-%20${encodeURIComponent(level.name)}" class="btn btn--primary">Join Now</a>
      </div>
    `;
    membershipGrid.appendChild(membershipCard);
  });
}

// Populate events
function populateEvents() {
  const eventsGrid = document.getElementById('eventsGrid');
  if (!eventsGrid) return;
  
  appData.events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.className = 'card';
    eventCard.innerHTML = `
      <div class="card__body">
        <h3>${event.name}</h3>
        ${event.date ? `<p class="event-date" style="color: var(--color-primary); font-weight: 600; margin-bottom: var(--space-8);">${event.date}</p>` : ''}
        ${event.status ? `<p class="event-status" style="color: var(--color-primary); font-weight: 600; margin-bottom: var(--space-8);">${event.status}</p>` : ''}
        <p>${event.description}</p>
      </div>
    `;
    eventsGrid.appendChild(eventCard);
  });
}

// Populate sponsors
function populateSponsors() {
  const sponsorsGrid = document.getElementById('sponsorsGrid');
  if (!sponsorsGrid) return;
  
  appData.sponsor_tiers.forEach(tier => {
    const sponsorCard = document.createElement('div');
    sponsorCard.className = 'card';
    sponsorCard.innerHTML = `
      <div class="card__body">
        <h3>${tier.name}</h3>
        <div class="sponsor-investment" style="color: var(--color-primary); font-size: var(--font-size-xl); font-weight: 600; margin-bottom: var(--space-16);">${tier.investment}</div>
        <ul class="sponsor-benefits" style="list-style: none; padding: 0;">
          ${tier.benefits.map(benefit => `<li style="padding: var(--space-4) 0; border-bottom: 1px solid var(--color-border);">${benefit}</li>`).join('')}
        </ul>
        <a href="mailto:media@kaaonline.org?subject=Sponsorship%20Inquiry%20-%20${encodeURIComponent(tier.name)}" class="btn btn--primary mt-8">Become a Sponsor</a>
      </div>
    `;
    sponsorsGrid.appendChild(sponsorCard);
  });
}

// Modal functionality
function initializeModal() {
  console.log('Initializing modal...');
  
  if (!modal || !modalClose) {
    console.error('Modal elements not found');
    return;
  }
  
  modalClose.addEventListener('click', function(e) {
    console.log('Modal close clicked');
    e.preventDefault();
    e.stopPropagation();
    closeArtistModal();
  });
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      console.log('Modal background clicked');
      closeArtistModal();
    }
  });
}

// Open artist modal
function openArtistModal(artistName) {
  console.log('Opening artist modal for:', artistName);
  
  if (!modal || !modalTitle || !modalBody) {
    console.error('Modal elements not found');
    return;
  }
  
  // Store the currently focused element
  lastFocusedElement = document.activeElement;
  
  modalTitle.textContent = artistName;
  modalBody.innerHTML = `
    <p>This talented artist is a valued member of the Kokomo Art Association. Each artist brings their unique perspective and skill to our vibrant community.</p>
    <p>To learn more about ${artistName}'s work, upcoming exhibitions, or to purchase their art, please contact us at <a href="mailto:media@kaaonline.org">media@kaaonline.org</a>.</p>
  `;
  
  modal.removeAttribute('hidden');
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Focus management
  setTimeout(() => {
    if (modalClose) {
      modalClose.focus();
    }
  }, 100);
}

// Close artist modal
function closeArtistModal() {
  console.log('Closing artist modal');
  
  if (!modal) {
    console.error('Modal not found');
    return;
  }
  
  modal.setAttribute('hidden', '');
  modal.setAttribute('aria-hidden', 'true');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  
  // Return focus to the element that opened the modal
  if (lastFocusedElement) {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

// Accordion functionality
function initializeAccordion() {
  console.log('Initializing accordion...');
  
  // Use event delegation for dynamically created elements
  document.addEventListener('click', function(e) {
    const header = e.target.closest('.class-header');
    if (header) {
      console.log('Class header clicked');
      e.preventDefault();
      e.stopPropagation();
      toggleAccordion(header);
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.target.classList.contains('class-header') && (e.key === 'Enter' || e.key === ' ')) {
      console.log('Class header key pressed');
      e.preventDefault();
      e.stopPropagation();
      toggleAccordion(e.target);
    }
  });
}

// Toggle accordion
function toggleAccordion(header) {
  console.log('Toggling accordion');
  
  const content = header.nextElementSibling;
  const toggle = header.querySelector('.class-toggle');
  const isExpanded = header.getAttribute('aria-expanded') === 'true';
  
  if (isExpanded) {
    // Close accordion
    content.classList.remove('active');
    toggle.textContent = '+';
    header.setAttribute('aria-expanded', 'false');
    header.classList.remove('active');
    console.log('Accordion closed');
  } else {
    // Close all other accordions
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
    console.log('Accordion opened');
  }
}

// Contact form functionality
function initializeContactForm() {
  const contactForm = document.querySelector('.contact-form');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    
    // Basic validation
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
    const mailtoLink = `mailto:media@kaaonline.org?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
    
    // Show success message
    showNotification('Thank you for your message! Your email client should open now.', 'success');
  });
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
  
  // Observe all fade sections
  document.querySelectorAll('.fade-section').forEach(section => {
    observer.observe(section);
  });
  
  // Observe cards for staggered animation
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
  
  // Throttled scroll listener
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
  // Escape key handling
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
  
  // Navigation overlay focus trap
  if (navOverlay) {
    navOverlay.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
        const focusableElements = navOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
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

// Show notification
function showNotification(message, type = 'info') {
  // Remove existing notifications
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
  `;
  
  if (type === 'error') {
    notification.style.borderColor = 'var(--color-error)';
    notification.style.background = 'rgba(255, 84, 89, 0.1)';
  } else if (type === 'success') {
    notification.style.borderColor = 'var(--color-primary)';
    notification.style.background = 'rgba(212, 175, 55, 0.1)';
  }
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  // Remove notification after 5 seconds
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

// Header scroll effect
function initializeHeaderScrollEffect() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  let lastScrollTop = 0;
  const scrollThreshold = 100;
  
  window.addEventListener('scroll', debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > scrollThreshold) {
      header.style.background = 'rgba(13, 13, 13, 0.98)';
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.background = 'rgba(13, 13, 13, 0.95)';
      header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
  }, 10));
}

// Performance optimization: Debounce scroll events
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

// Handle window resize
window.addEventListener('resize', function() {
  // Close navigation on resize to prevent layout issues
  if (window.innerWidth > 768) {
    closeNavOverlay();
  }
});

// Preloader (if needed)
window.addEventListener('load', function() {
  // All resources loaded
  document.body.classList.add('loaded');
});
