(() => {
const MARK = new URL('images/sutric-mark-white.png', (document.currentScript && document.currentScript.src) || location.href).href;
const L = {
  en: { grid: 'Grid', solar: 'Solar', gen: 'Generator', sites: ['Site A', 'Site B', 'Site C'], meter: 'Sutric meter', gw: 'Sutric gateway', sys: 'Sutric system', auto: 'AUTO', credit: 'Credit', load: 'Load', site: 'Site', offgrid: 'Off-grid', total: 'Total load', mix: 'Energy mix', off: 'OFF', standby: 'STANDBY', live: 'LIVE', font: "'IBM Plex Sans',sans-serif" },
  ar: { grid: 'الشبكة', solar: 'الطاقة الشمسية', gen: 'المولد', sites: ['الموقع أ', 'الموقع ب', 'الموقع ج'], meter: 'عداد سوتريك', gw: 'بوابة سوتريك', sys: 'نظام سوتريك', auto: 'تلقائي', credit: 'الرصيد', load: 'الحمل', site: 'الموقع', offgrid: 'بدون شبكة', total: 'إجمالي الحمل', mix: 'مزيج الطاقة', off: 'متوقفة', standby: 'احتياطي', live: 'مباشر', font: "'IBM Plex Sans Arabic',sans-serif" },
};
const AMBER = '#E3C79A', BLUE = '#3D82F0', SKY = '#7FB2FF', TILE = '#0E2642', LINE = 'rgba(127,178,255,.32)', INK = '#F4EEE4', MUTED = '#BFCBDB';
const SITES = [{ x: 200, srcs: ['grid', 'solar'] }, { x: 600, srcs: ['grid', 'solar', 'gen'] }, { x: 1000, srcs: ['solar', 'gen'] }];
const TS = 72, SY = 566, SITE_Y = 262, SITE_H = 80, C_Y = 374, C_H = 46, M_Y = 456, M_H = 74, GW_Y = 206, P_Y = 16, P_H = 154;
const srcX = (site, j) => site.x + (j - (site.srcs.length - 1) / 2) * 96;
const curve = (sx, y0, x) => `C ${sx} ${y0 - 26}, ${x} ${C_Y + C_H + 34}, ${x} ${C_Y + C_H + 10}`;
const portX = (site, j) => site.x + (j - (site.srcs.length - 1) / 2) * 34;
const dotPath = (k, sx, x) => { const y0 = k === 'grid' ? M_Y : SY; return `M${sx} ${y0} ${curve(sx, y0, x)}`; };
const eFlow = (k, sx, x) => k === 'grid' ? `M${sx} ${SY} V${M_Y + M_H} ${dotPath(k, sx, x)}` : dotPath(k, sx, x);
const dFlow = (x) => `M${x} ${GW_Y} V${P_Y + P_H}`;
const icons = {
  grid: `<path d="M48 18 L36 78 M48 18 L60 78 M30 34 H66 M34 50 H62 M40 50 L56 66 M56 50 L40 66 M28 78 H68" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
  solar: `<circle cx="64" cy="26" r="9" fill="${AMBER}"/><path d="M26 44 H70 L78 74 H18 Z M22 59 H74 M40 44 L36 74 M56 44 L60 74" fill="none" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>`,
  gen: `<rect x="20" y="32" width="56" height="38" rx="4" fill="none" stroke="${INK}" stroke-width="3.5"/><path d="M30 32 V24 H50 V32 M26 76 V70 M70 76 V70" stroke="${INK}" stroke-width="3.5" fill="none"/><path d="M50 40 L40 53 H48 L44 64 L56 49 H48 Z" fill="${AMBER}"/>`,
};
const SITE_ICONS = [
  `<path d="M2 28 L26 8 L50 28 M8 23 V54 H44 V23" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/><rect x="21" y="36" width="10" height="18" fill="${AMBER}"/><rect x="12" y="30" width="7" height="7" fill="${SKY}"/><rect x="34" y="30" width="7" height="7" fill="${SKY}"/>`,
  `<rect x="8" y="4" width="36" height="50" fill="none" stroke="${INK}" stroke-width="2.5"/>${[0,1,2,3].map(r => [0,1,2].map(c => `<rect x="${14 + c * 9}" y="${10 + r * 9}" width="6" height="6" fill="${SKY}"/>`).join('')).join('')}<rect x="21" y="45" width="10" height="9" fill="${AMBER}"/>`,
  `<path d="M14 54 L26 14 L38 54 M18 40 H34 M21 28 H31 M18 40 L31 28 M34 40 L21 28 M10 54 H42" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="26" cy="10" r="3.5" fill="${AMBER}"/><path d="M17 4 Q12 10 17 16 M35 4 Q40 10 35 16 M11 0 Q3 10 11 20 M41 0 Q49 10 41 20" fill="none" stroke="${SKY}" stroke-width="2" stroke-linecap="round" class="pulse"/>`,
];
const dot = (path, dur, sq) => sq
  ? `<rect width="10" height="10" x="-5" y="-5" fill="${SKY}"><animateMotion dur="${dur}s" repeatCount="indefinite" path="${path}"/></rect>`
  : `<circle r="5.5" cx="0" cy="0" fill="${AMBER}" stroke="rgba(227,199,154,.35)" stroke-width="5"><animateMotion dur="${dur}s" repeatCount="indefinite" path="${path}"/></circle>`;
const TX = [330, 470, 590], TROW = (i) => P_Y + 74 + i * 26;
const tpl = (t) => `
<style>
:host{display:block;width:100%;direction:ltr}
svg{width:100%;height:auto;display:block;overflow:visible;font-family:${t.font}}
.dash{stroke-dasharray:3 11;animation:dash 1.1s linear infinite}
.data{stroke-dasharray:8 8;animation:dash 1.6s linear infinite}
@keyframes dash{to{stroke-dashoffset:-28}}
.pulse{animation:pulse 1.4s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:.25}50%{opacity:1}}
.src,.fl{transition:opacity .6s}
.hbar{transition:width .8s ease}
</style>
<svg viewBox="0 0 1200 680" role="img" aria-label="Sutric Platform ← ${t.gw} ← ${t.sys} ← ${t.sites.join(', ')} ← ${t.grid} (${t.meter}), ${t.solar}, ${t.gen}">
  ${SITES.map((s, i) => `
    <path d="${dFlow(s.x)}" fill="none" stroke="${BLUE}" stroke-width="2.5" class="data"/>
    ${dot(`M${s.x} ${GW_Y} V${P_Y + P_H}`, 1.2, true)}
    <path d="M${s.x} ${SITE_Y} V${GW_Y + 40}" stroke="${BLUE}" stroke-width="3"/>
    <path d="M${s.x} ${C_Y} V${SITE_Y + SITE_H}" stroke="${AMBER}" stroke-width="3" class="dash" stroke-linecap="round"/>
    ${s.srcs.map((k, j) => { const sx = srcX(s, j); return `
      <path d="${eFlow(k, sx, portX(s, j))}" fill="none" stroke="${LINE}" stroke-width="2"/>
      <g class="fl" data-flow="${i}-${k}">
        <path d="${eFlow(k, sx, portX(s, j))}" fill="none" stroke="${AMBER}" stroke-width="3" class="dash" stroke-linecap="round"/>
        ${dot(dotPath(k, sx, portX(s, j)), 1.1)}
      </g>`; }).join('')}
    <rect x="${s.x - 22}" y="${GW_Y}" width="44" height="40" rx="5" fill="${BLUE}"/>
    <image href="${MARK}" x="${s.x - 8}" y="${GW_Y + 4}" width="16" height="16"/>
    <circle cx="${s.x - 8}" cy="${GW_Y + 27}" r="3.5" fill="#FFFFFF" class="pulse"/><circle cx="${s.x + 8}" cy="${GW_Y + 27}" r="3.5" fill="#4ADE80" class="pulse"/>
    <text x="${s.x + 32}" y="${GW_Y + 26}" fill="${SKY}" font-size="13" font-weight="600">${t.gw}</text>
    <rect x="${s.x - 110}" y="${SITE_Y}" width="220" height="${SITE_H}" rx="6" fill="${TILE}" stroke="${AMBER}" stroke-width="1.5"/>
    ${SITE_ICONS.map((ic, k) => `<g transform="translate(${s.x - 102 + k * 33} ${SITE_Y + 24}) scale(.58)">${ic}</g>`).join('')}
    <text x="${s.x + 6}" y="${SITE_Y + 34}" fill="${INK}" font-size="17" font-weight="700">${t.sites[i]}</text>
    <text x="${s.x + 6}" y="${SITE_Y + 60}" fill="${AMBER}" font-size="16" font-family="'IBM Plex Mono',monospace" data-site="${i}">0 kW</text>
    <rect x="${s.x - 100}" y="${C_Y}" width="200" height="${C_H}" rx="5" fill="#1F4E8C" stroke="${SKY}" stroke-width="1.5"/>
    <image href="${MARK}" x="${s.x - 90}" y="${C_Y + 11}" width="24" height="24"/>
    <text x="${s.x - 60}" y="${C_Y + 28}" fill="${INK}" font-size="14" font-weight="700">${t.sys}</text>
    <rect x="${s.x + 50}" y="${C_Y + 13}" width="42" height="20" rx="3" fill="${AMBER}"/>
    <text x="${s.x + 71}" y="${C_Y + 27}" text-anchor="middle" fill="#0B1E35" font-size="10" font-weight="700">${t.auto}</text>
    ${s.srcs.map((k, j) => { const px = portX(s, j); return `
      <g data-port="${i}-${k}">
        <rect x="${px - 13}" y="${C_Y + C_H - 2}" width="26" height="14" rx="3" fill="#0B1E35" stroke="${SKY}" stroke-width="1.5"/>
        <line data-sw="${i}-${k}" x1="${px - 7}" y1="${C_Y + C_H + 5}" x2="${px + 7}" y2="${C_Y + C_H + 5}" stroke="#4ADE80" stroke-width="2.5" stroke-linecap="round" style="transform-box:fill-box;transform-origin:left center;transition:transform .4s,stroke .4s"/>
      </g>`; }).join('')}
    ${s.srcs.map((k, j) => { const sx = srcX(s, j); return `
      ${k === 'grid' ? `
        <rect x="${sx - 38}" y="${M_Y}" width="76" height="${M_H}" rx="6" fill="#F4EEE4"/>
        <rect x="${sx - 30}" y="${M_Y + 8}" width="60" height="28" rx="3" fill="#0B1E35"/>
        <text x="${sx}" y="${M_Y + 27}" text-anchor="middle" fill="#4ADE80" font-size="13" font-family="'IBM Plex Mono',monospace" data-credit="${i}">000.0</text>
        <text x="${sx}" y="${M_Y + 52}" text-anchor="middle" fill="#0B1E35" font-size="10" font-weight="700">${t.credit} · kWh</text>
        <rect x="${sx - 8}" y="${M_Y + 56}" width="16" height="16" rx="3" fill="#0B1E35"/><image href="${MARK}" x="${sx - 6}" y="${M_Y + 58}" width="12" height="12"/><circle cx="${sx - 20}" cy="${M_Y + 64}" r="3.5" fill="none" stroke="#0B1E35" stroke-width="1.5"/><circle cx="${sx + 20}" cy="${M_Y + 64}" r="3.5" fill="none" stroke="#0B1E35" stroke-width="1.5"/>
        <text x="${sx - 48}" y="${M_Y + 42}" text-anchor="end" fill="${MUTED}" font-size="13" font-weight="600">${t.meter}</text>` : ''}
      <g class="src" data-src="${i}-${k}">
        <rect x="${sx - TS / 2}" y="${SY}" width="${TS}" height="${TS}" rx="6" fill="${TILE}" stroke="${LINE}" stroke-width="1.5"/>
        <g transform="translate(${sx - TS / 2} ${SY}) scale(.75)">${icons[k]}</g>
        <circle cx="${sx + TS / 2 - 8}" cy="${SY + 8}" r="4" fill="${AMBER}" class="pulse" data-led="${i}-${k}"/>
        <text x="${sx}" y="${SY + TS + 20}" text-anchor="middle" fill="${INK}" font-size="14" font-weight="700">${t[k]}</text>
        <text x="${sx}" y="${SY + TS + 38}" text-anchor="middle" fill="${AMBER}" font-size="13" font-family="'IBM Plex Mono',monospace" data-kw="${i}-${k}">0 kW</text>
      </g>`; }).join('')}`).join('')}
  <rect x="40" y="${P_Y}" width="1120" height="${P_H}" rx="8" fill="#F4EEE4"/>
  <text x="64" y="${P_Y + 38}" fill="#0B1E35" font-size="15" font-weight="700" font-family="'IBM Plex Mono',monospace">SUTRIC PLATFORM</text>
  <circle cx="224" cy="${P_Y + 33}" r="5" fill="#16A34A" class="pulse"/>
  <text x="236" y="${P_Y + 38}" fill="#16A34A" font-size="12" font-weight="700">${t.live}</text>
  <text x="64" y="${P_Y + 84}" fill="#4F5866" font-size="14" font-weight="600">${t.total}</text>
  <text x="64" y="${P_Y + 128}" fill="#0B1E35" font-size="36" font-weight="700" font-family="'IBM Plex Mono',monospace" data-total>0</text>
  <text x="250" y="${P_Y + 128}" fill="#4F5866" font-size="16" font-family="'IBM Plex Mono',monospace" text-anchor="end">kW</text>
  <rect x="316" y="${P_Y + 20}" width="440" height="${P_H - 36}" fill="#FFFFFF" stroke="#E4DACB"/>
  <rect x="316" y="${P_Y + 20}" width="440" height="28" fill="#0B1E35"/>
  ${[t.site, t.load, t.credit].map((h, c) => `<text x="${TX[c]}" y="${P_Y + 39}" fill="${INK}" font-size="12" font-weight="700">${h}${c === 2 ? ' · kWh' : c === 1 ? ' · kW' : ''}</text>`).join('')}
  ${SITES.map((s, i) => `
    ${i ? `<line x1="316" y1="${TROW(i) - 18}" x2="756" y2="${TROW(i) - 18}" stroke="#E4DACB"/>` : ''}
    <circle cx="${TX[0] + 4}" cy="${TROW(i) - 4}" r="4" fill="#16A34A"/>
    <text x="${TX[0] + 16}" y="${TROW(i)}" fill="#0B1E35" font-size="13" font-weight="600">${t.sites[i]}</text>
    <text x="${TX[1]}" y="${TROW(i)}" fill="#0B1E35" font-size="13" font-family="'IBM Plex Mono',monospace" data-tload="${i}">0</text>
    <text x="${TX[2]}" y="${TROW(i)}" fill="${s.srcs.includes('grid') ? '#1F4E8C' : '#8A93A0'}" font-size="13" font-weight="600" font-family="${s.srcs.includes('grid') ? "'IBM Plex Mono',monospace" : t.font}" data-tcredit="${i}">${s.srcs.includes('grid') ? '0' : t.offgrid}</text>`).join('')}
  <text x="800" y="${P_Y + 38}" fill="#4F5866" font-size="14" font-weight="600">${t.mix}</text>
  ${['grid', 'solar', 'gen'].map((k, i) => `
    <text x="800" y="${P_Y + 74 + i * 26}" fill="#0B1E35" font-size="13" font-weight="600">${t[k]}</text>
    <rect x="920" y="${P_Y + 66 + i * 26}" width="170" height="8" fill="#E4DACB"/>
    <rect class="hbar" data-h="${k}" x="920" y="${P_Y + 66 + i * 26}" width="0" height="8" fill="${[BLUE, AMBER, '#B8925A'][i]}"/>
    <text x="1140" y="${P_Y + 74 + i * 26}" fill="#4F5866" font-size="13" text-anchor="end" font-family="'IBM Plex Mono',monospace" data-pct="${k}">0%</text>`).join('')}
</svg>`;

class SutricEnergyFlow extends HTMLElement {
  static get observedAttributes() { return ['lang']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); this.tick = 0; this.credit = [412.6, 287.3]; }
  connectedCallback() { this.render(); this.timer = setInterval(() => this.update(), 1000); }
  disconnectedCallback() { clearInterval(this.timer); }
  attributeChangedCallback(n, o, v) { if (this.isConnected && o !== v) this.render(); }
  render() {
    const lg = this.getAttribute('lang') === 'ar' ? 'ar' : 'en';
    if (this.lg === lg && this.shadowRoot.firstChild) return;
    this.lg = lg; this.t = L[lg];
    const xs = lg === 'ar' ? [1000, 600, 200] : [200, 600, 1000];
    SITES.forEach((s, i) => { s.x = xs[i]; }); this.shadowRoot.innerHTML = tpl(this.t); this.update();
  }
  update() {
    const r = this.shadowRoot, t = this.t, q = (s) => r.querySelector(s), n = () => 0.94 + Math.random() * 0.12;
    this.tick++;
    const gridOn = Math.floor(this.tick / 7) % 2 === 0, cGen = Math.floor(this.tick / 5) % 2 === 1;
    const sun = 1 + Math.sin(this.tick / 3) * 0.2;
    const V = [
      { grid: gridOn ? 22 * n() : 0, solar: 14 * sun * n() },
      { grid: gridOn ? 30 * n() : 0, solar: 18 * sun * n(), gen: gridOn ? 0 : 28 * n() },
      { solar: 12 * sun * n(), gen: cGen ? 16 * n() : 0 },
    ];
    const mix = { grid: 0, solar: 0, gen: 0 };
    let total = 0;
    SITES.forEach((s, i) => {
      let siteKw = 0;
      s.srcs.forEach((k) => {
        const kw = V[i][k], on = kw > 0, id = `${i}-${k}`;
        siteKw += kw; mix[k] += kw;
        q(`[data-flow="${id}"]`).style.opacity = on ? 1 : 0;
        q(`[data-src="${id}"]`).style.opacity = on ? 1 : .45;
        q(`[data-led="${id}"]`).setAttribute('fill', on ? AMBER : '#4F5866');
        const sw = q(`[data-sw="${id}"]`); sw.style.transform = on ? 'rotate(0deg)' : 'rotate(-35deg)'; sw.setAttribute('stroke', on ? '#4ADE80' : '#8A93A0');
        q(`[data-kw="${id}"]`).textContent = on ? kw.toFixed(1) + ' kW' : (k === 'gen' ? t.standby : t.off);
      });
      total += siteKw;
      q(`[data-site="${i}"]`).textContent = siteKw.toFixed(1) + ' kW';
      q(`[data-tload="${i}"]`).textContent = siteKw.toFixed(1);
      if (i < 2) {
        this.credit[i] = Math.max(0, this.credit[i] - V[i].grid / 120);
        const c = this.credit[i].toFixed(1);
        q(`[data-credit="${i}"]`).textContent = c;
        q(`[data-tcredit="${i}"]`).textContent = c;
      }
    });
    for (const k in mix) {
      const pct = Math.round(mix[k] / total * 100);
      q(`[data-pct="${k}"]`).textContent = pct + '%';
      q(`[data-h="${k}"]`).setAttribute('width', 170 * pct / 100);
    }
    q('[data-total]').textContent = total.toFixed(1);
  }
}
if (!customElements.get('sutric-energy-flow')) customElements.define('sutric-energy-flow', SutricEnergyFlow);
})();
