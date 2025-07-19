// Events data from KAA
const eventsData = [
  {
    "id": "splash-watercolor",
    "title": "Splash of Watercolor Exhibit",
    "start": "2025-07-01",
    "end": "2025-07-30",
    "allDay": true,
    "location": "Kokomo Art Center, 525 W Ricketts St",
    "description": "Delicately beautiful watercolor artworks by Jennie Moore, Judy Arthur, Cissie Seidman, and Dixie Bennett.",
    "type": "exhibit"
  },
  {
    "id": "guest-artist-bass",
    "title": "Guest Artist Reception: Brandon C. Bass",
    "start": "2025-07-12T12:00:00",
    "end": "2025-07-12T15:00:00",
    "location": "Artworks Gallery, 210 N Main St",
    "description": "Free reception featuring portraits, military subjects, pets & landscapes by Brandon C. Bass. Light refreshments provided.",
    "type": "reception"
  },
  {
    "id": "first-friday-aug",
    "title": "First Friday 'Get Schooled!'",
    "start": "2025-08-01T17:30:00",
    "end": "2025-08-01T20:00:00",
    "location": "Downtown Kokomo",
    "description": "Back-to-school themed art demos and activities. KAA hosts open house in Artworks Gallery.",
    "type": "event"
  },
  {
    "id": "first-friday-sep",
    "title": "First Friday 'Art Walk'",
    "start": "2025-09-05T17:30:00",
    "end": "2025-09-05T20:00:00",
    "location": "Downtown Kokomo",
    "description": "Monthly arts-driven street festival with gallery programming and community art activities.",
    "type": "event"
  },
  {
    "id": "first-friday-oct",
    "title": "First Friday 'Masquerade'",
    "start": "2025-10-03T17:30:00",
    "end": "2025-10-03T20:00:00",
    "location": "Downtown Kokomo",
    "description": "Halloween-themed First Friday with masquerade activities and special gallery exhibitions.",
    "type": "event"
  },
  {
    "id": "first-friday-nov",
    "title": "First Friday 'Shop & Stroll'",
    "start": "2025-11-07T17:30:00",
    "end": "2025-11-07T20:00:00",
    "location": "Downtown Kokomo",
    "description": "Holiday shopping-themed First Friday with local artists showcasing gift-worthy works.",
    "type": "event"
  },
  {
    "id": "holiday-bazaar",
    "title": "Holiday Bazaar",
    "start": "2025-11-01",
    "end": "2025-12-23",
    "allDay": true,
    "location": "Artworks Gallery, 210 N Main St",
    "description": "Extended holiday market featuring local artists and craftspeople. Open Mon-Sat 12-4 PM with extended hours on First Fridays.",
    "type": "market"
  },
  {
    "id": "first-friday-dec",
    "title": "First Friday 'Ugly Sweater'",
    "start": "2025-12-05T17:30:00",
    "end": "2025-12-05T20:00:00",
    "location": "Downtown Kokomo",
    "description": "Holiday-themed First Friday with ugly sweater contest and festive art activities.",
    "type": "event"
  },
  {
    "id": "spring-art-show",
    "title": "97th Annual Spring Art Show",
    "start": "2025-05-22",
    "end": "2025-06-01",
    "allDay": true,
    "location": "Kokomo Art Center, 525 W Ricketts St",
    "description": "Annual juried showcase featuring the best of local and regional artists. Closing reception June 1 at 2 PM.",
    "type": "exhibit"
  },
  {
    "id": "recycled-art-show",
    "title": "Recycled Art Show",
    "start": "2025-03-07",
    "end": "2025-04-25",
    "allDay": true,
    "location": "Artworks Gallery, 210 N Main St",
    "description": "Juried exhibition featuring works created with 80% or more recycled materials. Awards reception April 4.",
    "type": "exhibit"
  },
  {
    "id": "junk-journal-workshop",
    "title": "Junk Journal Workshop",
    "start": "2025-03-15T12:00:00",
    "end": "2025-03-15T16:00:00",
    "location": "Artworks Gallery, 210 N Main St",
    "description": "Create a handmade journal using recycled materials. Instructor: Vivian Bennett. Fee: $62.50 including materials. Limited seats available.",
    "type": "workshop"
  },
  {
    "id": "photo-show",
    "title": "2025 Photo Show",
    "start": "2025-03-05",
    "end": "2025-03-29",
    "allDay": true,
    "location": "Kokomo Art Center, 525 W Ricketts St",
    "description": "Community photography exhibition showcasing the talent of local photographers.",
    "type": "exhibit"
  },
  {
    "id": "circus-exhibit",
    "title": "Circus Is Coming to Town",
    "start": "2025-05-02",
    "end": "2025-06-27",
    "allDay": true,
    "location": "Kokomo Art Center, 525 W Ricketts St",
    "description": "Partnership exhibition with the International Circus Museum featuring circus-themed artworks and silent auction items.",
    "type": "exhibit"
  }
];

// Global variables
let calendar;
let currentView = 'list';
let filteredEvents = [...eventsData];

// DOM elements
let monthViewBtn, listViewBtn, todayBtn, listView, eventsList, eventTypeFilter;
let modal, modalClose, modalTitle, modalBody, modalLocation, modalDates, modalType, modalLinks;
let loadingOverlay;
let lastFocusedElement = null;

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing KAA Events Calendar...');
  
  // Show loading overlay initially
  showLoadingOverlay();
  
  // Initialize immediately - no artificial delay
  try {
    initializeElements();
    initializeCalendar();
    initializeViewControls();
    initializeModal();
    initializeEventFilter();
    initializeKeyboardNavigation();
    populateListView();
    switchToListView();
    
    // Hide loading overlay after short delay to allow calendar render
    setTimeout(() => {
      hideLoadingOverlay();
      console.log('✅ KAA Events Calendar fully initialized');
    }, 300);
  } catch (error) {
    console.error('❌ Error during initialization:', error);
    hideLoadingOverlay();
    showNotification('Error loading calendar. Please refresh the page.', 'error');
  }
});

// Initialize DOM elements
function initializeElements() {
  console.log('🔍 Finding DOM elements...');
  
  // View controls
  monthViewBtn = document.getElementById('monthViewBtn');
  listViewBtn = document.getElementById('listViewBtn');
  todayBtn = document.getElementById('todayBtn');
  
  // List view elements
  listView = document.getElementById('listView');
  eventsList = document.getElementById('eventsList');
  eventTypeFilter = document.getElementById('eventTypeFilter');
  
  // Modal elements
  modal = document.getElementById('eventModal');
  modalClose = document.getElementById('modalClose');
  modalTitle = document.getElementById('modalTitle');
  modalBody = document.getElementById('modalBody');
  modalLocation = document.getElementById('modalLocation');
  modalDates = document.getElementById('modalDates');
  modalType = document.getElementById('modalType');
  modalLinks = document.getElementById('modalLinks');
  
  // Loading overlay
  loadingOverlay = document.getElementById('loadingOverlay');
  
  console.log('📋 Element status:', {
    monthViewBtn: monthViewBtn ? '✅' : '❌',
    listViewBtn: listViewBtn ? '✅' : '❌',
    todayBtn: todayBtn ? '✅' : '❌',
    modal: modal ? '✅' : '❌',
    modalLinks: modalLinks ? '✅' : '❌'
  });
}

// Initialize FullCalendar
function initializeCalendar() {
  console.log('📅 Initializing FullCalendar...');
  
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) {
    console.error('❌ Calendar element not found');
    return;
  }
  
  // Process events for FullCalendar
  const processedEvents = eventsData.map(event => ({
    ...event,
    className: `event-${event.type}`,
    extendedProps: {
      type: event.type,
      location: event.location,
      description: event.description
    }
  }));
  
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'today'
    },
    events: processedEvents,
    eventClick: function(info) {
      console.log('📅 Calendar event clicked:', info.event.title);
      info.jsEvent.preventDefault();
      info.jsEvent.stopPropagation();
      openEventModal(info.event);
    },
    eventDidMount: function(info) {
      // Ensure proper accessibility
      info.el.setAttribute('tabindex', '0');
      info.el.setAttribute('role', 'button');
      info.el.setAttribute('aria-label', `Event: ${info.event.title}. Press Enter to view details.`);
      
      // Add keyboard support
      info.el.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openEventModal(info.event);
        }
      });
    },
    height: 'auto',
    aspectRatio: 1.8,
    eventDisplay: 'block',
    dayMaxEvents: 3,
    moreLinkClick: 'popover',
    eventOrderStrict: true,
    eventOrder: ['start', 'title']
  });
  
  calendar.render();
  
  // Make calendar globally accessible for debugging
  window.calendar = calendar;
  
  console.log('✅ FullCalendar initialized and rendered');
}

// Initialize view controls
function initializeViewControls() {
  console.log('🎛️ Initializing view controls...');
  
  if (monthViewBtn) {
    monthViewBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('📅 Month view clicked');
      switchToMonthView();
    });
  }
  
  if (listViewBtn) {
    listViewBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('📋 List view clicked');
      switchToListView();
    });
  }
  
  if (todayBtn) {
    todayBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('📅 Today button clicked');
      if (calendar) {
        calendar.today();
        showNotification('Navigated to today', 'success');
      }
    });
  }
  
  console.log('✅ View controls initialized');
}

// Switch to month view
function switchToMonthView() {
  currentView = 'month';
  
  // Update button states
  if (monthViewBtn) {
    monthViewBtn.classList.remove('btn--outline');
    monthViewBtn.classList.add('btn--primary', 'active');
  }
  if (listViewBtn) {
    listViewBtn.classList.remove('btn--primary', 'active');
    listViewBtn.classList.add('btn--outline');
  }
  
  // Show calendar, hide list
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    calendarEl.style.display = 'block';
  }
  if (listView) {
    listView.classList.add('hidden');
  }
  
  // Re-render calendar to ensure proper sizing
  if (calendar) {
    setTimeout(() => {
      calendar.updateSize();
    }, 100);
  }
  
  console.log('📅 Switched to month view');
}

// Switch to list view
function switchToListView() {
  currentView = 'list';
  
  // Update button states
  if (listViewBtn) {
    listViewBtn.classList.remove('btn--outline');
    listViewBtn.classList.add('btn--primary', 'active');
  }
  if (monthViewBtn) {
    monthViewBtn.classList.remove('btn--primary', 'active');
    monthViewBtn.classList.add('btn--outline');
  }
  
  // Hide calendar, show list
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    calendarEl.style.display = 'none';
  }
  if (listView) {
    listView.classList.remove('hidden');
  }
  
  // Refresh list view
  populateListView();
  
  console.log('📋 Switched to list view');
}

// Initialize event filter
function initializeEventFilter() {
  if (!eventTypeFilter) return;
  
  eventTypeFilter.addEventListener('change', function() {
    const selectedType = this.value;
    console.log('🔍 Filter changed to:', selectedType || 'All');
    
    if (selectedType === '') {
      filteredEvents = [...eventsData];
    } else {
      filteredEvents = eventsData.filter(event => event.type === selectedType);
    }
    
    populateListView();
  });
}

// Populate list view
function populateListView() {
  if (!eventsList) return;
  
  console.log('📋 Populating list view...');
  
  // Clear existing events
  eventsList.innerHTML = '';
  
  // Sort events by start date
  const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.start) - new Date(b.start));
  
  if (sortedEvents.length === 0) {
    eventsList.innerHTML = `
      <div style="text-align: center; padding: var(--space-32); color: var(--color-text-secondary);">
        <p>No events found for the selected filter.</p>
      </div>
    `;
    return;
  }
  
  sortedEvents.forEach(event => {
    const eventCard = createEventCard(event);
    eventsList.appendChild(eventCard);
  });
  
  console.log(`✅ List view populated with ${sortedEvents.length} events`);
}

// Create event card for list view
function createEventCard(event) {
  const card = document.createElement('div');
  card.className = 'event-card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Event: ${event.title}. Press Enter to view details.`);
  
  const startDate = new Date(event.start);
  const endDate = event.end ? new Date(event.end) : null;
  
  let dateString = formatEventDate(startDate, endDate, event.allDay);
  
  card.innerHTML = `
    <div class="event-card-header">
      <h3 class="event-card-title">${event.title}</h3>
      <div class="event-type-badge type-${event.type}">${event.type}</div>
    </div>
    <div class="event-card-dates">${dateString}</div>
    ${event.location ? `<div class="event-card-location">📍 ${event.location}</div>` : ''}
    <p class="event-card-description">${event.description}</p>
  `;
  
  // Add click handler
  card.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('📋 List event clicked:', event.title);
    openEventModalFromData(event);
  });
  
  // Add keyboard support
  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openEventModalFromData(event);
    }
  });
  
  return card;
}

// Format event date for display
function formatEventDate(startDate, endDate, allDay) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  const timeOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  
  let dateString = startDate.toLocaleDateString('en-US', options);
  
  if (!allDay) {
    dateString += ` at ${startDate.toLocaleTimeString('en-US', timeOptions)}`;
  }
  
  if (endDate && endDate.getTime() !== startDate.getTime()) {
    if (allDay) {
      dateString += ` - ${endDate.toLocaleDateString('en-US', options)}`;
    } else if (endDate.toDateString() === startDate.toDateString()) {
      dateString += ` - ${endDate.toLocaleTimeString('en-US', timeOptions)}`;
    } else {
      dateString += ` - ${endDate.toLocaleDateString('en-US', options)} at ${endDate.toLocaleTimeString('en-US', timeOptions)}`;
    }
  }
  
  return dateString;
}

// Generate ICS data string for download
function generateICS(event) {
  const start = formatICSDate(new Date(event.start));
  const end = formatICSDate(event.end ? new Date(event.end) : new Date(event.start));
  const description = (event.description || '').replace(/\n/g, '\\n');
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${event.location || ''}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\n');
}

function formatICSDate(date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

// Build Google Calendar link
function generateGoogleCalendarLink(event) {
  const start = formatICSDate(new Date(event.start));
  const end = formatICSDate(event.end ? new Date(event.end) : new Date(event.start));
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description || '',
    location: event.location || '',
    sf: 'true',
    output: 'xml'
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}

// Initialize modal functionality
function initializeModal() {
  console.log('🪟 Initializing modal...');
  
  if (!modal || !modalClose) {
    console.error('❌ Modal elements not found');
    return;
  }
  
  // Ensure modal is hidden initially
  modal.setAttribute('hidden', '');
  modal.setAttribute('aria-hidden', 'true');
  modal.style.display = 'none';
  
  modalClose.addEventListener('click', function(e) {
    console.log('✖️ Modal close clicked');
    e.preventDefault();
    e.stopPropagation();
    closeEventModal();
  });
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      console.log('🎯 Modal background clicked');
      closeEventModal();
    }
  });
  
  console.log('✅ Modal initialized');
}

// Open event modal from FullCalendar event object
function openEventModal(fcEvent) {
  const eventData = {
    title: fcEvent.title,
    start: fcEvent.start,
    end: fcEvent.end,
    allDay: fcEvent.allDay,
    type: fcEvent.extendedProps.type,
    location: fcEvent.extendedProps.location,
    description: fcEvent.extendedProps.description
  };
  
  openEventModalFromData(eventData);
}

// Open event modal from event data
function openEventModalFromData(eventData) {
  console.log('🚀 Opening event modal for:', eventData.title);
  
  if (!modal || !modalTitle || !modalBody || !modalLocation || !modalDates || !modalType) {
    console.error('❌ Modal elements not found');
    showNotification('Unable to display event details', 'error');
    return;
  }
  
  lastFocusedElement = document.activeElement;
  
  // Populate modal content
  modalTitle.textContent = eventData.title;
  modalBody.textContent = eventData.description;
  modalLocation.textContent = eventData.location || '';
  modalType.textContent = eventData.type;
  modalType.className = `event-type-badge type-${eventData.type}`;

  // Add to calendar links
  if (modalLinks) {
    const googleUrl = generateGoogleCalendarLink(eventData);
    const icsData = generateICS(eventData);
    const icsHref = `data:text/calendar;charset=utf8,${encodeURIComponent(icsData)}`;
    modalLinks.innerHTML = `Add to calendar: <a href="${googleUrl}" target="_blank" rel="noopener" class="btn btn--sm btn--primary">Google</a> <a href="${icsHref}" download="event.ics" class="btn btn--sm btn--outline">Outlook</a> <a href="${icsHref}" download="event.ics" class="btn btn--sm btn--outline">Apple</a>`;
  }
  
  // Format dates for modal
  const startDate = new Date(eventData.start);
  const endDate = eventData.end ? new Date(eventData.end) : null;
  modalDates.textContent = formatEventDate(startDate, endDate, eventData.allDay);
  
  // Show modal
  modal.removeAttribute('hidden');
  modal.setAttribute('aria-hidden', 'false');
  modal.style.display = 'flex';
  
  document.body.style.overflow = 'hidden';
  
  // Focus management
  setTimeout(() => {
    if (modalClose) {
      modalClose.focus();
    }
  }, 100);
  
  console.log('✅ Event modal opened');
}

// Close event modal
function closeEventModal() {
  console.log('🚪 Closing event modal');
  
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
  
  console.log('✅ Event modal closed');
}

// Initialize keyboard navigation
function initializeKeyboardNavigation() {
  console.log('⌨️ Initializing keyboard navigation...');
  
  document.addEventListener('keydown', function(e) {
    // ESC key - close modal
    if (e.key === 'Escape') {
      if (modal && !modal.hasAttribute('hidden')) {
        closeEventModal();
      }
      return;
    }
    
    // Keyboard shortcuts for view switching (when not focused on input)
    if (document.activeElement.tagName !== 'INPUT' && 
        document.activeElement.tagName !== 'SELECT' && 
        document.activeElement.tagName !== 'TEXTAREA') {
      
      switch(e.key) {
        case 'M':
        case 'm':
          if (currentView !== 'month') {
            switchToMonthView();
          }
          break;
        case 'L':
        case 'l':
          if (currentView !== 'list') {
            switchToListView();
          }
          break;
        case 'T':
        case 't':
          if (calendar) {
            calendar.today();
            showNotification('Navigated to today', 'success');
          }
          break;
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
  
  console.log('✅ Keyboard navigation initialized');
}

// Show loading overlay
function showLoadingOverlay() {
  if (loadingOverlay) {
    loadingOverlay.removeAttribute('hidden');
    loadingOverlay.style.display = 'flex';
  }
}

// Hide loading overlay
function hideLoadingOverlay() {
  if (loadingOverlay) {
    loadingOverlay.setAttribute('hidden', '');
    setTimeout(() => {
      loadingOverlay.style.display = 'none';
    }, 300);
  }
}

// Show notification
function showNotification(message, type = 'info') {
  console.log(`📢 Notification (${type}):`, message);
  
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());
  
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 24px;
    background: var(--cinematic-card-bg);
    color: var(--color-text);
    padding: 16px 24px;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    z-index: 3001;
    backdrop-filter: blur(20px);
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
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 10);
  
  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
  if (calendar && currentView === 'month') {
    calendar.updateSize();
  }
}, 250));

// Debounce function for performance
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

// Touch gesture support for mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(e) {
  if (currentView === 'month' && calendar) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
}, { passive: true });

document.addEventListener('touchend', function(e) {
  if (currentView === 'month' && calendar) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    
    // Only trigger if horizontal swipe is significant and vertical is minimal
    if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 100) {
      if (deltaX > 0) {
        calendar.prev(); // Swipe right - go to previous month
      } else {
        calendar.next(); // Swipe left - go to next month
      }
    }
  }
}, { passive: true });

// Global error handling
window.addEventListener('error', function(e) {
  console.error('Global error caught:', e.error);
  showNotification('An unexpected error occurred. Please refresh the page.', 'error');
});

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(e) {
  console.error('Unhandled promise rejection:', e.reason);
  e.preventDefault();
});

// Announce when calendar is ready for screen readers
window.addEventListener('load', function() {
  setTimeout(() => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = 'Kokomo Art Association events calendar loaded. Use tab key to navigate events, M for month view, L for list view, T for today.';
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      if (announcement.parentNode) {
        document.body.removeChild(announcement);
      }
    }, 1000);
  }, 1000);
});

console.log('🚀 KAA Events Calendar JavaScript loaded successfully');
console.log('📋 Available keyboard shortcuts: M (month view), L (list view), T (today), ESC (close modal)');