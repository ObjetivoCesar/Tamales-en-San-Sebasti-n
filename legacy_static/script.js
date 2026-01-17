// ========================================
// CONFIGURACIÓN GLOBAL
// ========================================

const CONFIG = {
    WHATSAPP_NUMBER: '0982810040',
    WHATSAPP_COUNTRY_CODE: '593',
    GOOGLE_SHEETS_WEBHOOK: '', // Se configurará después
    STORAGE_KEY: 'tamales_clicks',
};

// ========================================
// UTILIDADES
// ========================================

/**
 * Obtiene la dirección IP del cliente (aproximada)
 */
async function getClientIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.warn('No se pudo obtener IP:', error);
        return 'unknown';
    }
}

/**
 * Genera un ID de sesión único
 */
function getOrCreateSessionId() {
    let sessionId = sessionStorage.getItem('tamales_session_id');
    if (!sessionId) {
        sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('tamales_session_id', sessionId);
    }
    return sessionId;
}

/**
 * Obtiene la fecha y hora formateada
 */
function getFormattedDateTime() {
    const now = new Date();
    return now.toLocaleString('es-EC', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

/**
 * Obtiene el tipo de dispositivo
 */
function getDeviceType() {
    const ua = navigator.userAgent;
    if (/mobile|android|iphone|ipad|phone/i.test(ua.toLowerCase())) {
        return 'mobile';
    }
    return 'desktop';
}

// ========================================
// REGISTRO DE CLICS
// ========================================

/**
 * Guarda un clic en localStorage
 */
function saveClickToStorage(clickData) {
    try {
        let clicks = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY) || '[]');
        clicks.push(clickData);
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(clicks));
        console.log('Clic guardado:', clickData);
        return true;
    } catch (error) {
        console.error('Error al guardar clic:', error);
        return false;
    }
}

/**
 * Obtiene todos los clics guardados
 */
function getAllClicks() {
    try {
        return JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY) || '[]');
    } catch (error) {
        console.error('Error al obtener clics:', error);
        return [];
    }
}

/**
 * Limpia todos los clics guardados
 */
function clearAllClicks() {
    localStorage.removeItem(CONFIG.STORAGE_KEY);
    console.log('Todos los clics han sido eliminados');
}

// ========================================
// INTEGRACIÓN GOOGLE SHEETS
// ========================================

/**
 * Envía un clic a Google Sheets
 * Nota: Requiere configurar un Google Apps Script o Google Form
 */
async function sendClickToGoogleSheets(clickData) {
    if (!CONFIG.GOOGLE_SHEETS_WEBHOOK) {
        console.warn('Google Sheets webhook no configurado');
        return false;
    }

    try {
        const response = await fetch(CONFIG.GOOGLE_SHEETS_WEBHOOK, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(clickData)
        });
        console.log('Clic enviado a Google Sheets');
        return true;
    } catch (error) {
        console.error('Error al enviar a Google Sheets:', error);
        return false;
    }
}

/**
 * Configura el webhook de Google Sheets
 */
function setGoogleSheetsWebhook(webhookUrl) {
    CONFIG.GOOGLE_SHEETS_WEBHOOK = webhookUrl;
    localStorage.setItem('tamales_sheets_webhook', webhookUrl);
    console.log('Google Sheets webhook configurado');
}

/**
 * Obtiene el webhook de Google Sheets del almacenamiento
 */
function loadGoogleSheetsWebhook() {
    const webhook = localStorage.getItem('tamales_sheets_webhook');
    if (webhook) {
        CONFIG.GOOGLE_SHEETS_WEBHOOK = webhook;
    }
}

// ========================================
// INTEGRACIÓN WHATSAPP
// ========================================

/**
 * Genera la URL de WhatsApp con mensaje predefinido
 */
function generateWhatsAppURL(tamalType = 'general') {
    const baseMessage = 'Hola, vengo de la página de tamales de San Sebastián en Loja y quiero hacer un pedido';
    
    let message = baseMessage;
    if (tamalType !== 'general') {
        message += ` de tamales de ${tamalType}`;
    }
    message += '.';

    // Codifica el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Formato: https://wa.me/[country_code][number]?text=[message]
    return `https://wa.me/${CONFIG.WHATSAPP_COUNTRY_CODE}${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Abre WhatsApp con el mensaje predefinido
 */
function openWhatsApp(tamalType = 'general') {
    const url = generateWhatsAppURL(tamalType);
    window.open(url, '_blank');
}

// ========================================
// MANEJADOR PRINCIPAL DE CLICS
// ========================================

/**
 * Maneja el clic en un botón de WhatsApp
 */
async function handleWhatsAppClick(tamalType = 'general') {
    try {
        // Obtiene datos del cliente
        const clientIP = await getClientIP();
        const sessionId = getOrCreateSessionId();
        const timestamp = new Date().toISOString();
        const formattedDateTime = getFormattedDateTime();
        const deviceType = getDeviceType();

        // Crea objeto de datos del clic
        const clickData = {
            id: 'click_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            tamalType: tamalType,
            timestamp: timestamp,
            formattedDateTime: formattedDateTime,
            clientIP: clientIP,
            sessionId: sessionId,
            userAgent: navigator.userAgent,
            deviceType: deviceType,
            referrerUrl: document.referrer || 'direct',
            pageUrl: window.location.href,
            synced: false
        };

        // Guarda en localStorage
        saveClickToStorage(clickData);

        // Intenta enviar a Google Sheets
        await sendClickToGoogleSheets(clickData);

        // Abre WhatsApp
        openWhatsApp(tamalType);

        // Log para debugging
        console.log('Clic registrado y procesado:', clickData);

    } catch (error) {
        console.error('Error en handleWhatsAppClick:', error);
        // Aún así abre WhatsApp aunque haya error en el registro
        openWhatsApp(tamalType);
    }
}

// ========================================
// LÓGICA DE VIDEO Y HEADER
// ========================================

/**
 * Carga el video de YouTube al hacer clic (Facade Pattern)
 */
function loadVideo() {
    const container = document.getElementById('videoContainer');
    const youtubeId = 'dQw4w9WgXcQ'; // ID de muestra, usuario debe cambiarlo
    
    container.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" 
            title="Video Tradición Tamales" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
}

/**
 * Maneja el cambio de estilo del header al hacer scroll
 */
function handleHeaderScroll() {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// ========================================
// FUNCIONES DE ADMINISTRACIÓN
// ========================================

/**
 * Obtiene estadísticas de clics
 */
function getClickStats() {
    const clicks = getAllClicks();
    const stats = {
        totalClicks: clicks.length,
        byTamalType: {},
        byDevice: {},
        byHour: {},
        lastClick: clicks.length > 0 ? clicks[clicks.length - 1] : null
    };

    clicks.forEach(click => {
        // Por tipo de tamal
        stats.byTamalType[click.tamalType] = (stats.byTamalType[click.tamalType] || 0) + 1;

        // Por dispositivo
        stats.byDevice[click.deviceType] = (stats.byDevice[click.deviceType] || 0) + 1;

        // Por hora
        const hour = new Date(click.timestamp).getHours();
        stats.byHour[hour] = (stats.byHour[hour] || 0) + 1;
    });

    return stats;
}

/**
 * Muestra estadísticas en la consola
 */
function logStats() {
    const stats = getClickStats();
    console.table('=== ESTADÍSTICAS DE CLICS ===');
    console.log('Total de clics:', stats.totalClicks);
    console.log('Por tipo de tamal:', stats.byTamalType);
    console.log('Por dispositivo:', stats.byDevice);
    console.log('Por hora:', stats.byHour);
    console.log('Último clic:', stats.lastClick);
}

/**
 * Exporta los clics como CSV
 */
function exportClicksAsCSV() {
    const clicks = getAllClicks();
    if (clicks.length === 0) {
        alert('No hay clics para exportar');
        return;
    }

    let csv = 'ID,Tipo de Tamal,Fecha/Hora,IP,Session ID,Dispositivo,URL Referencia\n';
    
    clicks.forEach(click => {
        csv += `"${click.id}","${click.tamalType}","${click.formattedDateTime}","${click.clientIP}","${click.sessionId}","${click.deviceType}","${click.pageUrl}"\n`;
    });

    // Crea blob y descarga
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tamales_clicks_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    console.log('Archivo CSV descargado');
}

/**
 * Sincroniza todos los clics no sincronizados a Google Sheets
 */
async function syncAllClicksToSheets() {
    const clicks = getAllClicks();
    let syncedCount = 0;

    for (const click of clicks) {
        if (!click.synced) {
            const success = await sendClickToGoogleSheets(click);
            if (success) {
                click.synced = true;
                syncedCount++;
            }
        }
    }

    // Actualiza localStorage
    localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(clicks));
    console.log(`${syncedCount} clics sincronizados a Google Sheets`);
    return syncedCount;
}

// ========================================
// INICIALIZACIÓN
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Carga configuración guardada
    loadGoogleSheetsWebhook();
    
    // Crea sesión
    getOrCreateSessionId();
    
    // Listener de scroll para el header
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); // Ejecutar inicio para scroll actual
    
    console.log('Página de Tamales San Sebastián cargada correctamente');
    console.log('Para ver estadísticas, ejecuta: logStats()');
    console.log('Para exportar clics como CSV, ejecuta: exportClicksAsCSV()');
    console.log('Para sincronizar clics a Google Sheets, ejecuta: syncAllClicksToSheets()');
});

// ========================================
// EXPONE FUNCIONES GLOBALES PARA DEBUGGING
// ========================================

window.tamalesAdmin = {
    getStats: getClickStats,
    logStats: logStats,
    getAllClicks: getAllClicks,
    clearAllClicks: clearAllClicks,
    exportCSV: exportClicksAsCSV,
    syncToSheets: syncAllClicksToSheets,
    setGoogleSheetsWebhook: setGoogleSheetsWebhook,
    generateWhatsAppURL: generateWhatsAppURL
};

console.log('API de administración disponible en: window.tamalesAdmin');
