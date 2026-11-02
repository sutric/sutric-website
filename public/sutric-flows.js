(() => {
const BASE = (document.currentScript && document.currentScript.src) || location.href;
const MARK = 'data:image/png;base64,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';
const AMBER = '#E3C79A', BLUE = '#3D82F0', SKY = '#7FB2FF', TILE = '#0E2642', LINE = 'rgba(127,178,255,.32)', INK = '#F4EEE4', MUTED = '#BFCBDB', NAVY = '#0B1E35', PAPER = '#F4EEE4', GREEN = '#16A34A', WARN = '#C2410C';
const FONT = { en: "'IBM Plex Sans',sans-serif", ar: "'IBM Plex Sans Arabic',sans-serif" };
const MONO = "'IBM Plex Mono',monospace";

/* ---------- Flow 1: multi-site prepaid metering ---------- */
const T1 = {
  en: { tab: 'Multi-site Meters', title: 'Multi-site Utility Energy Meters Management System', desc: 'Sutric gateways connected to utility meters to monitor and top up the credit of all sites from one platform.',
    site: 'Site', loc: 'Location', credit: 'Credit · kWh', status: 'Status', action: 'Action', topup: 'Top up', ok: 'Active', low: 'Low credit', busy: 'Topping up…', done: 'Topped up',
    lowCount: 'Low credit', topups: 'Top-ups today', online: 'online', live: 'LIVE', gw: 'Sutric gateway', more: 'Scales to thousands of sites',
    name: (i) => 'Site ' + (i + 1), locs: ['Khartoum', 'Omdurman', 'Port Sudan', 'Kassala', 'Wad Madani', 'El Obeid', 'Dongola'] },
  ar: { tab: 'عدادات المواقع المتعددة', title: 'نظام إدارة عدادات الطاقة للمؤسسات ذات المواقع المتعددة', desc: 'بوابات سوتريك متصلة بالعدادات لمراقبة رصيد جميع المواقع وشحنه من منصة واحدة.',
    site: 'الموقع', loc: 'المدينة', credit: 'الرصيد · ك.و.س', status: 'الحالة', action: 'إجراء', topup: 'شحن', ok: 'نشط', low: 'رصيد منخفض', busy: 'جارٍ الشحن…', done: 'تم الشحن',
    lowCount: 'رصيد منخفض', topups: 'عمليات الشحن اليوم', online: 'متصل', live: 'مباشر', gw: 'بوابة سوتريك', more: 'قابل للتوسع لآلاف المواقع',
    name: (i) => 'الموقع ' + (i + 1), locs: ['الخرطوم', 'أم درمان', 'بورتسودان', 'كسلا', 'ود مدني', 'الأبيض', 'دنقلا'] },
};
const N = 7, PX0 = 250, PX1 = 950, PY0 = 200, PY1 = 540, TH = 250, RH = 34, CW = 154;
const START = [312, 188, 78, 420, 265, 140, 102], RATE = [1.6, 1.2, 2.6, 1.0, 1.8, 1.4, 2.2], TOPUP = 250, CAP = 500;
const LAYOUT = [
  { x: 150, y: 16, v: 'down', h: false, kind: 'tower' },
  { x: 523, y: 16, v: 'down', h: false, kind: 'building' },
  { x: 900, y: 16, v: 'down', h: true, kind: 'tower' },
  { x: 1026, y: 330, v: 'down', h: true, kind: 'building', side: 'r' },
  { x: 820, y: 610, v: 'up', h: true, kind: 'tower' },
  { x: 226, y: 610, v: 'up', h: false, kind: 'building' },
  { x: 20, y: 330, v: 'down', h: false, kind: 'tower', side: 'l' },
];
const VAR = {
  down: { icon: [0, 0], meter: [70, 2], gw: [88, 80], lbl: 86, gwl: 99 },
  up: { icon: [0, 42], meter: [70, 44], gw: [88, 0], lbl: 126, gwl: 19 },
};
const ICON = {
  tower: '<path d="M14 54 L26 14 L38 54 M18 40 H34 M21 28 H31 M18 40 L31 28 M34 40 L21 28 M10 54 H42" fill="none" stroke="' + INK + '" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/><circle cx="26" cy="10" r="3.5" fill="' + AMBER + '"/><path d="M17 4 Q12 10 17 16 M35 4 Q40 10 35 16 M11 0 Q3 10 11 20 M41 0 Q49 10 41 20" fill="none" stroke="' + SKY + '" stroke-width="2" stroke-linecap="round" class="pulse"/>',
  building: '<rect x="8" y="4" width="36" height="50" fill="none" stroke="' + INK + '" stroke-width="2.5"/>' + [0, 1, 2, 3].map((r) => [0, 1, 2].map((c) => '<rect x="' + (14 + c * 9) + '" y="' + (10 + r * 9) + '" width="6" height="6" fill="' + SKY + '"/>').join('')).join('') + '<rect x="21" y="45" width="10" height="9" fill="' + AMBER + '"/>',
};
const geo = (rtl) => LAYOUT.map((s) => {
  const h = rtl ? !s.h : s.h, x0 = rtl ? 1200 - s.x - CW : s.x, V = VAR[s.v];
  const side = s.side ? (rtl ? (s.side === 'l' ? 'r' : 'l') : s.side) : null;
  const px = (lx) => h ? x0 + CW - lx : x0 + lx, rx = (lx, w) => h ? x0 + CW - lx - w : x0 + lx;
  let G, P;
  if (side) { const gy = s.y + V.gw[1] + 14; G = [px(136), gy]; P = [side === 'l' ? PX0 : PX1, gy]; }
  else { const gx = px(112); G = [gx, s.v === 'down' ? s.y + V.gw[1] + 28 : s.y]; P = [Math.max(PX0 + 24, Math.min(PX1 - 24, gx)), s.v === 'down' ? PY0 : PY1]; }
  return { ...s, h, x0, y0: s.y, V, px, rx, G, P };
});

const flow1 = {
  id: 'multisite',
  text: T1,
  svg(lg) {
    const t = T1[lg], rtl = lg === 'ar';
    const X = (x) => rtl ? 1200 - x : x, A = rtl ? 'end' : 'start', AE = rtl ? 'start' : 'end';
    const R = (x, w) => rtl ? 1200 - x - w : x;
    const C = { site: 274, loc: 350, credit: 470, bar: 540, status: 680, btn: 846 };
    const row = (i) => TH + 30 + 23 + i * RH;
    const S = geo(rtl);
    return '<svg viewBox="0 0 1200 790" role="img" aria-label="' + t.title + '">' +
      S.map((s, i) => {
        const V = s.V, y = s.y0, gwA = s.h ? 'end' : 'start';
        const line = 'M' + s.G[0] + ' ' + s.G[1] + ' L' + s.P[0] + ' ' + s.P[1];
        const iconMidY = y + V.icon[1] + 36, mx = s.px(112), my0 = y + V.meter[1], gy0 = y + V.gw[1];
        const tx = (s.G[0] + s.P[0]) / 2, ty = (s.G[1] + s.P[1]) / 2;
        return '<path d="' + line + '" stroke="' + BLUE + '" stroke-width="2.5" class="data" fill="none"/>' +
          '<rect width="9" height="9" x="-4.5" y="-4.5" fill="' + SKY + '"><animateMotion dur="1.8s" begin="-' + (i * 0.26).toFixed(2) + 's" repeatCount="indefinite" path="' + line + '"/></rect>' +
          '<path d="M' + s.px(52) + ' ' + iconMidY + ' H' + s.px(70) + '" stroke="' + AMBER + '" stroke-width="3" class="dash" stroke-linecap="round"/>' +
          '<g transform="translate(' + s.rx(0, 56) + ' ' + (y + V.icon[1]) + ') scale(1.1)">' + ICON[s.kind] + '</g>' +
          '<rect x="' + s.rx(70, 84) + '" y="' + my0 + '" width="84" height="60" rx="6" fill="' + PAPER + '" data-meter="' + i + '" style="transition:fill .4s"/>' +
          '<rect x="' + (mx - 35) + '" y="' + (my0 + 7) + '" width="70" height="25" rx="3" fill="' + NAVY + '"/>' +
          '<text x="' + mx + '" y="' + (my0 + 24) + '" text-anchor="middle" fill="#4ADE80" font-size="14" font-family="' + MONO + '" data-lcd="' + i + '">000.0</text>' +
          '<text x="' + mx + '" y="' + (my0 + 49) + '" text-anchor="middle" fill="' + NAVY + '" font-size="10" font-weight="700" font-family="' + MONO + '">kWh</text>' +
          '<circle cx="' + (mx - 25) + '" cy="' + (my0 + 46) + '" r="3" fill="none" stroke="' + NAVY + '" stroke-width="1.5"/><circle cx="' + (mx + 25) + '" cy="' + (my0 + 46) + '" r="3" fill="none" stroke="' + NAVY + '" stroke-width="1.5"/>' +
          '<path d="M' + mx + ' ' + (s.v === 'down' ? my0 + 60 : gy0 + 28) + ' V' + (s.v === 'down' ? gy0 : my0) + '" stroke="' + SKY + '" stroke-width="2" stroke-dasharray="2 3"/>' +
          '<rect x="' + (mx - 24) + '" y="' + gy0 + '" width="48" height="28" rx="5" fill="' + BLUE + '"/>' +
          '<image href="' + MARK + '" x="' + (mx - 18) + '" y="' + (gy0 + 6) + '" width="16" height="16"/>' +
          '<circle cx="' + (mx + 8) + '" cy="' + (gy0 + 14) + '" r="3" fill="#FFFFFF" class="pulse"/><circle cx="' + (mx + 17) + '" cy="' + (gy0 + 14) + '" r="3" fill="#4ADE80" class="pulse"/>' +
          '<text x="' + (s.side ? mx : s.px(144)) + '" y="' + (s.side ? gy0 + 46 : y + V.gwl) + '" text-anchor="' + (s.side ? 'middle' : gwA) + '" fill="' + SKY + '" font-size="12" font-weight="600">' + t.gw + '</text>' +
          '<text x="' + s.px(30) + '" y="' + (y + V.lbl) + '" text-anchor="middle" fill="' + INK + '" font-size="15" font-weight="700">' + t.name(i) + '</text>' +
          '<text x="' + s.px(30) + '" y="' + (y + V.lbl + 17) + '" text-anchor="middle" fill="' + MUTED + '" font-size="12.5">' + t.locs[i] + '</text>' +
          '<g data-toast="' + i + '" opacity="0" style="transition:opacity .4s"><rect x="' + (tx - 42) + '" y="' + (ty - 13) + '" width="84" height="26" rx="13" fill="#4ADE80"/><text x="' + tx + '" y="' + (ty + 5) + '" text-anchor="middle" fill="' + NAVY + '" font-size="12" font-weight="700" font-family="' + MONO + '">+' + TOPUP + ' kWh</text></g>';
      }).join('') +
      '<circle r="8" fill="#4ADE80" stroke="rgba(74,222,128,.35)" stroke-width="8" data-packet opacity="0"/>' +
      '<rect x="' + PX0 + '" y="' + PY0 + '" width="' + (PX1 - PX0) + '" height="' + (PY1 - PY0) + '" rx="8" fill="' + PAPER + '"/>' +
      '<text x="' + X(274) + '" y="' + (PY0 + 34) + '" text-anchor="' + A + '" fill="' + NAVY + '" font-size="15" font-weight="700" font-family="' + MONO + '" direction="ltr">SUTRIC PLATFORM</text>' +
      '<circle cx="' + X(436) + '" cy="' + (PY0 + 29) + '" r="5" fill="' + GREEN + '" class="pulse"/>' +
      '<text x="' + X(448) + '" y="' + (PY0 + 34) + '" text-anchor="' + A + '" fill="' + GREEN + '" font-size="12" font-weight="700">' + t.live + '</text>' +
      '<text x="' + X(926) + '" y="' + (PY0 + 34) + '" text-anchor="' + AE + '" fill="#4F5866" font-size="12.5" font-weight="600">' +
        t.lowCount + ' <tspan font-family="' + MONO + '" fill="' + WARN + '" font-weight="700" data-k="low">0</tspan>   ·   ' +
        t.topups + ' <tspan font-family="' + MONO + '" fill="' + GREEN + '" font-weight="700" data-k="tops">0</tspan>   ·   ' +
        '<tspan font-family="' + MONO + '" fill="' + NAVY + '" font-weight="700">' + N + '/' + N + '</tspan> ' + t.online + '</text>' +
      '<rect x="' + R(270, 660) + '" y="' + TH + '" width="660" height="' + (30 + N * RH) + '" fill="#FFFFFF" stroke="#E4DACB"/>' +
      '<rect x="' + R(270, 660) + '" y="' + TH + '" width="660" height="30" fill="' + NAVY + '"/>' +
      [[t.site, C.site], [t.loc, C.loc], [t.credit, C.credit], [t.status, C.status], [t.action, C.btn]].map(([h, x]) => '<text x="' + X(x) + '" y="' + (TH + 20) + '" text-anchor="' + A + '" fill="' + INK + '" font-size="12" font-weight="700">' + h + '</text>').join('') +
      S.map((_, i) => {
        const r = row(i);
        return '<rect x="' + R(271, 658) + '" y="' + (r - 23) + '" width="658" height="' + RH + '" fill="transparent" data-row="' + i + '" style="transition:fill .4s"/>' +
          (i ? '<line x1="' + X(270) + '" y1="' + (r - 23) + '" x2="' + X(930) + '" y2="' + (r - 23) + '" stroke="#EEE6DA"/>' : '') +
          '<text x="' + X(C.site) + '" y="' + r + '" text-anchor="' + A + '" fill="' + NAVY + '" font-size="13" font-weight="600">' + t.name(i) + '</text>' +
          '<text x="' + X(C.loc) + '" y="' + r + '" text-anchor="' + A + '" fill="#4F5866" font-size="13">' + t.locs[i] + '</text>' +
          '<text x="' + X(C.credit) + '" y="' + r + '" text-anchor="' + A + '" fill="' + NAVY + '" font-size="13" font-family="' + MONO + '" data-tc="' + i + '">0</text>' +
          '<rect x="' + R(C.bar, 110) + '" y="' + (r - 8) + '" width="110" height="7" fill="#E4DACB"/>' +
          '<rect x="' + R(C.bar, 0) + '" y="' + (r - 8) + '" width="0" height="7" fill="' + BLUE + '" data-bar="' + i + '"/>' +
          '<circle cx="' + X(C.status + 4) + '" cy="' + (r - 4) + '" r="4" fill="' + GREEN + '" data-dot="' + i + '"/>' +
          '<text x="' + X(C.status + 16) + '" y="' + r + '" text-anchor="' + A + '" fill="' + NAVY + '" font-size="12.5" font-weight="600" data-st="' + i + '">' + t.ok + '</text>' +
          '<rect x="' + R(C.btn, 72) + '" y="' + (r - 17) + '" width="72" height="23" rx="4" fill="none" stroke="' + BLUE + '" stroke-width="1.3" data-btn="' + i + '"/>' +
          '<text x="' + X(C.btn + 36) + '" y="' + (r - 1) + '" text-anchor="middle" fill="' + BLUE + '" font-size="12" font-weight="700" data-btxt="' + i + '">' + t.topup + '</text>';
      }).join('') +
      '</svg>';
  },
  start(root, lg) {
    const t = T1[lg], rtl = lg === 'ar', q = (s) => root.querySelector(s), S = geo(rtl);
    const credit = START.slice(), state = Array(N).fill('ok'), BAR = 540;
    let tops = 0, busy = false, tick = 0, alive = true;
    const paint = () => {
      let low = 0;
      credit.forEach((c, i) => {
        if (c < 80 && state[i] === 'ok') state[i] = 'low';
        const s = state[i], warn = s === 'low', go = s === 'busy', ok = s === 'done';
        if (warn) low++;
        q('[data-lcd="' + i + '"]').textContent = c.toFixed(1);
        q('[data-tc="' + i + '"]').textContent = c.toFixed(1);
        const w = Math.max(2, Math.min(1, c / CAP) * 110), bar = q('[data-bar="' + i + '"]');
        bar.setAttribute('width', w); bar.setAttribute('x', rtl ? 1200 - BAR - w : BAR); bar.setAttribute('fill', warn ? WARN : BLUE);
        q('[data-dot="' + i + '"]').setAttribute('fill', warn ? WARN : go ? BLUE : GREEN);
        const st = q('[data-st="' + i + '"]'); st.textContent = t[s]; st.setAttribute('fill', warn ? WARN : NAVY);
        q('[data-row="' + i + '"]').setAttribute('fill', warn ? '#FDF1E7' : go ? '#EAF2FE' : ok ? '#EAF7EE' : 'transparent');
        q('[data-btn="' + i + '"]').setAttribute('fill', go || warn ? BLUE : 'none');
        q('[data-btxt="' + i + '"]').setAttribute('fill', go || warn ? '#FFFFFF' : BLUE);
        q('[data-meter="' + i + '"]').setAttribute('fill', warn ? '#F6D9C2' : PAPER);
      });
      q('[data-k="low"]').textContent = low;
      q('[data-k="tops"]').textContent = tops;
    };
    const send = (i) => {
      busy = true; state[i] = 'busy'; paint();
      const pk = q('[data-packet]'), G = S[i].G, P = S[i].P, dur = 1300, t0 = performance.now();
      pk.setAttribute('opacity', 1);
      const step = (now) => {
        if (!alive) return;
        const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 2);
        pk.setAttribute('cx', P[0] + (G[0] - P[0]) * e); pk.setAttribute('cy', P[1] + (G[1] - P[1]) * e);
        if (k < 1) return requestAnimationFrame(step);
        pk.setAttribute('opacity', 0);
        credit[i] += TOPUP; tops++; state[i] = 'done';
        const toast = q('[data-toast="' + i + '"]'); toast.setAttribute('opacity', 1);
        setTimeout(() => alive && toast.setAttribute('opacity', 0), 1800);
        setTimeout(() => { state[i] = 'ok'; busy = false; }, 2200);
        paint();
      };
      requestAnimationFrame(step);
    };
    paint();
    const timer = setInterval(() => {
      tick++;
      credit.forEach((c, i) => { if (state[i] !== 'busy') credit[i] = Math.max(0, c - RATE[i] * (0.9 + Math.random() * 0.2)); });
      paint();
      if (!busy) { const i = state.findIndex((s) => s === 'low'); if (i > -1 && tick % 2 === 0) send(i); }
    }, 1000);
    return () => { alive = false; clearInterval(timer); };
  },
};


/* ---------- Flow 2: multiple energy resources ---------- */
const T2 = {
  en: { tab: 'Multiple Energy Resources', title: 'Multiple Energy Resources Management for Organizations & Institutions', desc: 'Grid, solar PV, batteries and generators connected to one Sutric monitoring system, with live measurements of every source on the Sutric platform.',
    grid: 'Grid', solar: 'Solar PV', bat: 'Batteries', gen: 'Generator', sys: 'Sutric Monitoring System', load: 'Facility load', total: 'Total load', today: 'Today', online: 'Online', outage: 'Outage',
    charging: 'Charging', discharging: 'Discharging', idle: 'Idle', standby: 'Standby', running: 'Running', fuel: 'Fuel', soc: 'Charge', mix: 'Energy mix today', events: 'Events', live: 'LIVE',
    modes: { grid: 'Grid + Solar', bat: 'Solar + Battery', gen: 'Generator + Solar' },
    ev: { start: 'All sources connected', off: 'Grid outage — switched to solar + battery', gen: 'Battery low — generator started', on: 'Grid restored — generator on standby' } },
  ar: { tab: 'مصادر الطاقة المتعددة', title: 'إدارة مصادر الطاقة المتعددة للمؤسسات', desc: 'مصادر الطاقة متصلة بنظام إدارة سوتريك واحد، مع قياسات مباشرة لكل مصدر على منصة سوتريك.',
    grid: 'الشبكة', solar: 'الطاقة الشمسية', bat: 'البطاريات', gen: 'المولد', sys: 'نظام مراقبة سوتريك', load: 'حمل المنشأة', total: 'إجمالي الحمل', today: 'اليوم', online: 'متصلة', outage: 'منقطعة',
    charging: 'شحن', discharging: 'تفريغ', idle: 'خاملة', standby: 'احتياطي', running: 'يعمل', fuel: 'الوقود', soc: 'الشحن', mix: 'مزيج الطاقة اليوم', events: 'الأحداث', live: 'مباشر',
    modes: { grid: 'الشبكة + الشمسية', bat: 'الشمسية + البطاريات', gen: 'المولد + الشمسية' },
    ev: { start: 'جميع المصادر متصلة', off: 'انقطاع الشبكة — التحويل إلى الشمسية والبطاريات', gen: 'انخفاض البطارية — تشغيل المولد', on: 'عودة الشبكة — المولد في وضع الاحتياط' } },
};
const K2 = ['grid', 'solar', 'bat', 'gen'], SRC_Y = [110, 260, 410, 560], TL = 40, TW2 = 190, TH2 = 104;
const SYS = { x: 410, y: 250, w: 300, h: 220 }, PORT = [300, 336, 372, 408], PL = 770, PW = 390, PT = 20, PH = 690;
const COL = { grid: BLUE, solar: AMBER, bat: '#4ADE80', gen: '#B8925A' };
const ICON2 = {
  grid: '<path d="M48 18 L36 78 M48 18 L60 78 M30 34 H66 M34 50 H62 M40 50 L56 66 M56 50 L40 66 M28 78 H68" fill="none" stroke="' + INK + '" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>',
  solar: '<circle cx="64" cy="26" r="9" fill="' + AMBER + '"/><path d="M26 44 H70 L78 74 H18 Z M22 59 H74 M40 44 L36 74 M56 44 L60 74" fill="none" stroke="' + INK + '" stroke-width="3.5" stroke-linejoin="round"/>',
  bat: '<rect x="18" y="30" width="56" height="40" rx="4" fill="none" stroke="' + INK + '" stroke-width="3.5"/><rect x="74" y="42" width="6" height="16" rx="1" fill="' + INK + '"/><rect x="24" y="36" width="44" height="28" rx="2" fill="#4ADE80" data-socfill/>',
  gen: '<rect x="20" y="32" width="56" height="38" rx="4" fill="none" stroke="' + INK + '" stroke-width="3.5"/><path d="M30 32 V24 H50 V32 M26 76 V70 M70 76 V70" stroke="' + INK + '" stroke-width="3.5" fill="none"/><path d="M50 40 L40 53 H48 L44 64 L56 49 H48 Z" fill="' + AMBER + '"/>',
};
const BLD = '<rect x="8" y="4" width="36" height="50" fill="none" stroke="' + INK + '" stroke-width="2.5"/>' + [0, 1, 2, 3].map((r) => [0, 1, 2].map((c) => '<rect x="' + (14 + c * 9) + '" y="' + (10 + r * 9) + '" width="6" height="6" fill="' + SKY + '"/>').join('')).join('') + '<rect x="21" y="45" width="10" height="9" fill="' + AMBER + '"/>';
const ROWY = (j) => PT + 176 + j * 74, BX = PL + 24, BW = PW - 48;

const flow2 = {
  id: 'hybrid', hold: 16000, text: T2,
  svg(lg) {
    const t = T2[lg], rtl = lg === 'ar';
    const X = (x) => rtl ? 1200 - x : x, A = rtl ? 'end' : 'start', AE = rtl ? 'start' : 'end', R = (x, w) => rtl ? 1200 - x - w : x;
    const sx = SYS.x + SYS.w / 2, ex = TL + TW2, px = SYS.x;
    const fwd = (j) => 'M' + X(ex) + ' ' + SRC_Y[j] + ' C ' + X(ex + 90) + ' ' + SRC_Y[j] + ', ' + X(px - 90) + ' ' + PORT[j] + ', ' + X(px) + ' ' + PORT[j];
    const rev = (j) => 'M' + X(px) + ' ' + PORT[j] + ' C ' + X(px - 90) + ' ' + PORT[j] + ', ' + X(ex + 90) + ' ' + SRC_Y[j] + ', ' + X(ex) + ' ' + SRC_Y[j];
    const dotM = (p) => '<circle r="5.5" fill="' + AMBER + '" stroke="rgba(227,199,154,.35)" stroke-width="5"><animateMotion dur="1.2s" repeatCount="indefinite" path="' + p + '"/></circle>';
    const data = 'M' + X(SYS.x + SYS.w) + ' 360 H' + X(PL);
    return '<svg viewBox="0 -30 1200 790" role="img" aria-label="' + t.title + '">' +
      K2.map((k, j) => '<path d="' + fwd(j) + '" fill="none" stroke="' + LINE + '" stroke-width="2"/>' +
        '<g data-fl="' + k + '" style="transition:opacity .5s"><path d="' + fwd(j) + '" fill="none" stroke="' + AMBER + '" stroke-width="3" class="dash" stroke-linecap="round"/>' + dotM(fwd(j)) + '</g>' +
        (k === 'bat' ? '<g data-fl="bat-in" style="transition:opacity .5s" opacity="0"><path d="' + rev(j) + '" fill="none" stroke="#4ADE80" stroke-width="3" class="dash" stroke-linecap="round"/><circle r="5.5" fill="#4ADE80" stroke="rgba(74,222,128,.35)" stroke-width="5"><animateMotion dur="1.2s" repeatCount="indefinite" path="' + rev(j) + '"/></circle></g>' : '') +
        '<g data-tile="' + k + '" style="transition:opacity .5s">' +
        '<rect x="' + R(TL, TW2) + '" y="' + (SRC_Y[j] - TH2 / 2) + '" width="' + TW2 + '" height="' + TH2 + '" rx="8" fill="' + TILE + '" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<g transform="translate(' + R(TL + 6, 72) + ' ' + (SRC_Y[j] - 36) + ') scale(.75)">' + ICON2[k] + '</g>' +
        '<text x="' + X(TL + 86) + '" y="' + (SRC_Y[j] - 8) + '" text-anchor="' + A + '" fill="' + INK + '" font-size="15" font-weight="700">' + t[k] + '</text>' +
        '<text x="' + X(TL + 86) + '" y="' + (SRC_Y[j] + 18) + '" text-anchor="' + A + '" fill="' + AMBER + '" font-size="14" font-family="' + MONO + '" data-kw="' + k + '">0 kW</text>' +
        '<circle cx="' + X(TL + TW2 - 14) + '" cy="' + (SRC_Y[j] - TH2 / 2 + 14) + '" r="4.5" fill="' + AMBER + '" class="pulse" data-led="' + k + '"/></g>').join('') +
      '<path d="M' + X(sx) + ' ' + (SYS.y + SYS.h) + ' V560" stroke="' + AMBER + '" stroke-width="3" class="dash" stroke-linecap="round"/>' +
      '<path d="' + data + '" stroke="' + BLUE + '" stroke-width="2.5" class="data"/>' +
      '<rect width="10" height="10" x="-5" y="-5" fill="' + SKY + '"><animateMotion dur="1.1s" repeatCount="indefinite" path="' + data + '"/></rect>' +
      '<rect x="' + R(SYS.x, SYS.w) + '" y="' + SYS.y + '" width="' + SYS.w + '" height="' + SYS.h + '" rx="10" fill="#1F4E8C" stroke="' + SKY + '" stroke-width="1.5"/>' +
      '<image href="' + MARK + '" x="' + (X(sx) - 20) + '" y="' + (SYS.y + 22) + '" width="40" height="40"/>' +
      '<text x="' + X(sx) + '" y="' + (SYS.y + 90) + '" text-anchor="middle" fill="' + INK + '" font-size="16" font-weight="700">' + t.sys + '</text>' +
      '<rect x="' + (X(sx) - 96) + '" y="' + (SYS.y + 108) + '" width="192" height="30" rx="15" fill="' + AMBER + '"/>' +
      '<text x="' + X(sx) + '" y="' + (SYS.y + 128) + '" text-anchor="middle" fill="' + NAVY + '" font-size="13" font-weight="700" data-mode>—</text>' +
      K2.map((k, j) => '<rect x="' + (X(sx) - 66 + j * 36 - 12) + '" y="' + (SYS.y + 160) + '" width="24" height="24" rx="5" fill="#0B1E35" stroke="' + SKY + '" stroke-width="1.2"/>' +
        '<g transform="translate(' + (X(sx) - 66 + j * 36 - 10) + ' ' + (SYS.y + 162) + ') scale(.21)">' + ICON2[k].replace(' data-socfill', '') + '</g>' +
        '<circle cx="' + (X(sx) - 66 + j * 36) + '" cy="' + (SYS.y + 196) + '" r="3.5" fill="#4ADE80" data-sw="' + k + '"/>').join('') +
      K2.map((k, j) => '<rect x="' + R(px - 8, 8) + '" y="' + (PORT[j] - 7) + '" width="8" height="14" rx="2" fill="' + SKY + '"/>').join('') +
      '<g transform="translate(' + (X(sx) - 31) + ' 560) scale(1.2)">' + BLD + '</g>' +
      '<text x="' + X(sx) + '" y="650" text-anchor="middle" fill="' + INK + '" font-size="15" font-weight="700">' + t.load + '</text>' +
      '<text x="' + X(sx) + '" y="672" text-anchor="middle" fill="' + AMBER + '" font-size="15" font-family="' + MONO + '" data-load>0 kW</text>' +
      '<rect x="' + R(PL, PW) + '" y="' + PT + '" width="' + PW + '" height="' + PH + '" rx="10" fill="' + PAPER + '"/>' +
      '<text x="' + X(BX) + '" y="' + (PT + 38) + '" text-anchor="' + A + '" fill="' + NAVY + '" font-size="15" font-weight="700" font-family="' + MONO + '" direction="ltr">SUTRIC PLATFORM</text>' +
      '<circle cx="' + X(BX + 162) + '" cy="' + (PT + 33) + '" r="5" fill="' + GREEN + '" class="pulse"/>' +
      '<text x="' + X(BX + 174) + '" y="' + (PT + 38) + '" text-anchor="' + A + '" fill="' + GREEN + '" font-size="12" font-weight="700">' + t.live + '</text>' +
      '<text x="' + X(BX + BW) + '" y="' + (PT + 38) + '" text-anchor="' + AE + '" fill="#4F5866" font-size="13" font-family="' + MONO + '" data-clock>08:00</text>' +
      '<text x="' + X(BX) + '" y="' + (PT + 82) + '" text-anchor="' + A + '" fill="#4F5866" font-size="13" font-weight="600">' + t.total + '</text>' +
      '<text x="' + X(BX) + '" y="' + (PT + 124) + '" text-anchor="' + A + '" fill="' + NAVY + '" font-size="36" font-weight="700" font-family="' + MONO + '" direction="ltr"><tspan data-total>0</tspan><tspan font-size="16" fill="#4F5866"> kW</tspan></text>' +
      '<rect x="' + R(BX + BW - 150, 150) + '" y="' + (PT + 96) + '" width="150" height="32" rx="16" fill="#FFFFFF" stroke="#E4DACB"/>' +
      '<text x="' + X(BX + BW - 75) + '" y="' + (PT + 117) + '" text-anchor="middle" fill="' + NAVY + '" font-size="12.5" font-weight="700" data-mode2>—</text>' +
      K2.map((k, j) => { const y = ROWY(j); return (j ? '' : '<line x1="' + X(BX) + '" y1="' + (y - 30) + '" x2="' + X(BX + BW) + '" y2="' + (y - 30) + '" stroke="#E4DACB"/>') +
        '<circle cx="' + X(BX + 5) + '" cy="' + (y - 5) + '" r="5" fill="' + COL[k] + '"/>' +
        '<text x="' + X(BX + 18) + '" y="' + y + '" text-anchor="' + A + '" fill="' + NAVY + '" font-size="14" font-weight="700">' + t[k] + '</text>' +
        '<text x="' + X(BX + BW) + '" y="' + y + '" text-anchor="' + AE + '" fill="' + NAVY + '" font-size="15" font-weight="700" font-family="' + MONO + '" direction="ltr" data-pkw="' + k + '">0.0 kW</text>' +
        '<rect x="' + R(BX, BW) + '" y="' + (y + 10) + '" width="' + BW + '" height="6" rx="3" fill="#E4DACB"/>' +
        '<rect x="' + R(BX, 0) + '" y="' + (y + 10) + '" width="0" height="6" rx="3" fill="' + COL[k] + '" data-pbar="' + k + '" style="transition:width .6s,x .6s"/>' +
        '<text x="' + X(BX) + '" y="' + (y + 36) + '" text-anchor="' + A + '" fill="#4F5866" font-size="12.5" data-psub="' + k + '">—</text>'; }).join('') +
      '<text x="' + X(BX) + '" y="' + (PT + 484) + '" text-anchor="' + A + '" fill="#4F5866" font-size="13" font-weight="600">' + t.mix + '</text>' +
      K2.map((k) => '<rect y="' + (PT + 496) + '" height="12" fill="' + COL[k] + '" data-mix="' + k + '" x="' + X(BX) + '" width="0" style="transition:width .6s,x .6s"/>').join('') +
      K2.map((k, j) => '<circle cx="' + X(BX + 5 + j * 88) + '" cy="' + (PT + 528) + '" r="4" fill="' + COL[k] + '"/><text x="' + X(BX + 14 + j * 88) + '" y="' + (PT + 532) + '" text-anchor="' + A + '" fill="' + NAVY + '" font-size="12" font-family="' + MONO + '" data-mixp="' + k + '">0%</text>').join('') +
      '<line x1="' + X(BX) + '" y1="' + (PT + 552) + '" x2="' + X(BX + BW) + '" y2="' + (PT + 552) + '" stroke="#E4DACB"/>' +
      '<text x="' + X(BX) + '" y="' + (PT + 576) + '" text-anchor="' + A + '" fill="#4F5866" font-size="13" font-weight="600">' + t.events + '</text>' +
      [0, 1, 2].map((n) => '<g data-ev="' + n + '" opacity="' + (1 - n * 0.28) + '"><text x="' + X(BX) + '" y="' + (PT + 604 + n * 26) + '" text-anchor="' + A + '" fill="' + NAVY + '" font-size="12" font-family="' + MONO + '" data-evt></text><text x="' + X(BX + 50) + '" y="' + (PT + 604 + n * 26) + '" text-anchor="' + A + '" fill="' + NAVY + '" font-size="12" font-weight="500" data-evm></text></g>').join('') +
      '</svg>';
  },
  start(root, lg) {
    const t = T2[lg], rtl = lg === 'ar', q = (s) => root.querySelector(s);
    const today = { grid: 182, solar: 246, bat: 64, gen: 38 };
    let tick = 0, soc = 82, fuel = 68, gridOn = true, genOn = false, min = 8 * 60;
    const evs = [];
    const clock = () => String(Math.floor(min / 60) % 24).padStart(2, '0') + ':' + String(min % 60).padStart(2, '0');
    const log = (k) => { evs.unshift([clock(), t.ev[k]]); evs.length = Math.min(evs.length, 3); };
    const setBar = (el, x0, w) => { el.setAttribute('width', w); el.setAttribute('x', rtl ? 1200 - x0 - w : x0); };
    log('start');
    const step = () => {
      const cyc = tick % 28, n = () => 0.95 + Math.random() * 0.1;
      const nowGrid = cyc < 8;
      if (gridOn && !nowGrid) log('off');
      if (!gridOn && nowGrid) { log('on'); genOn = false; }
      gridOn = nowGrid;
      const solar = (26 + 6 * Math.sin(tick / 4)) * n(), load = (54 + 6 * Math.sin(tick / 3)) * n();
      let grid = 0, gen = 0, bat = 0;
      if (gridOn) { bat = soc < 96 ? 12 : 0; grid = load + bat - solar; }
      else {
        if (!genOn && soc < 35) { genOn = true; log('gen'); }
        if (genOn) { gen = 62 * n(); bat = gen + solar - load; }
        else bat = -(load - solar);
      }
      soc = Math.max(5, Math.min(100, soc + bat / 10));
      if (genOn) fuel = Math.max(5, fuel - 0.5);
      const kw = { grid, solar, bat: Math.abs(bat), gen };
      today.grid += grid / 12; today.solar += solar / 12; today.gen += gen / 12; if (bat < 0) today.bat += -bat / 12;
      const mode = gridOn ? 'grid' : genOn ? 'gen' : 'bat';
      q('[data-mode]').textContent = t.modes[mode]; q('[data-mode2]').textContent = t.modes[mode];
      q('[data-clock]').textContent = clock();
      q('[data-load]').textContent = load.toFixed(1) + ' kW';
      q('[data-total]').textContent = load.toFixed(1);
      const discharging = bat < -0.1, charging = bat > 0.1;
      K2.forEach((k) => {
        const on = k === 'bat' ? discharging : kw[k] > 0.1;
        const active = k === 'bat' ? (charging || discharging) : on;
        q('[data-fl="' + k + '"]').setAttribute('opacity', on ? 1 : 0);
        q('[data-tile="' + k + '"]').setAttribute('opacity', active ? 1 : 0.45);
        q('[data-led="' + k + '"]').setAttribute('fill', active ? AMBER : '#4F5866');
        q('[data-sw="' + k + '"]').setAttribute('fill', active ? '#4ADE80' : '#4F5866');
        const sign = k === 'bat' ? (charging ? '+' : discharging ? '−' : '') : '';
        q('[data-kw="' + k + '"]').textContent = k === 'grid' && !gridOn ? t.outage : k === 'gen' && !genOn ? t.standby : sign + kw[k].toFixed(1) + ' kW';
        q('[data-pkw="' + k + '"]').textContent = sign + kw[k].toFixed(1) + ' kW';
        setBar(q('[data-pbar="' + k + '"]'), BX, Math.min(1, kw[k] / 80) * BW);
      });
      q('[data-fl="bat-in"]').setAttribute('opacity', charging ? 1 : 0);
      q('[data-socfill]').setAttribute('width', Math.max(2, 44 * soc / 100));
      q('[data-socfill]').setAttribute('fill', soc < 35 ? '#F59E0B' : '#4ADE80');
      q('[data-psub="grid"]').textContent = t.today + ' ' + today.grid.toFixed(0) + ' kWh · ' + (gridOn ? t.online : t.outage);
      q('[data-psub="solar"]').textContent = t.today + ' ' + today.solar.toFixed(0) + ' kWh';
      q('[data-psub="bat"]').textContent = t.soc + ' ' + soc.toFixed(0) + '% · ' + (charging ? t.charging : discharging ? t.discharging : t.idle);
      q('[data-psub="gen"]').textContent = t.fuel + ' ' + fuel.toFixed(0) + '% · ' + (genOn ? t.running : t.standby);
      const sum = K2.reduce((s, k) => s + today[k], 0);
      let acc = 0;
      K2.forEach((k) => { const w = today[k] / sum * BW; setBar(q('[data-mix="' + k + '"]'), BX + acc, w); acc += w; q('[data-mixp="' + k + '"]').textContent = Math.round(today[k] / sum * 100) + '%'; });
      [0, 1, 2].forEach((i) => { const g = q('[data-ev="' + i + '"]'), e = evs[i] || ['', '']; g.querySelector('[data-evt]').textContent = e[0]; g.querySelector('[data-evm]').textContent = e[1]; });
      tick++; min += 5;
    };
    step();
    const timer = setInterval(step, 1000);
    return () => clearInterval(timer);
  },
};

/* ---------- Flow 3: residential solar ---------- */
const T3 = {
  en: { tab: 'Residential Solar', title: 'Residential Solar Power Systems Management', desc: 'The Sutric Home System picks the most efficient and suitable source, and manages home loads based on the operating mode and the source in use.',
    grid: 'Grid', solar: 'Solar PV', bat: 'Batteries', ctl: 'Sutric Home System', home: 'Home', online: 'Online', outage: 'Outage', gen: 'Generating', night: 'No sun',
    charging: 'Charging', discharging: 'Discharging', idle: 'Idle', batL: 'Battery', loadL: 'Home load', on: 'ON', off: 'OFF', ess: 'Essential', non: 'Non-essential',
    ac: 'AC unit', heater: 'Heater', fan: 'Fans', light: 'Lights',
    modes: { grid: 'Grid + Solar', sb: 'Solar + Battery', bat: 'Battery only' },
    ev: { start: 'Grid + solar — all loads on', off: 'Grid outage — battery mode: AC & heater switched off, fans & lights kept on', sunset: 'Sunset — battery supplying essential loads', on: 'Grid restored — AC & heater switched back on' } },
  ar: { tab: 'الطاقة الشمسية السكنية', title: 'إدارة أنظمة الطاقة الشمسية السكنية', desc: 'تحكم ذكي في مصادر الطاقة والأحمال المنزلية.',
    grid: 'الشبكة', solar: 'الطاقة الشمسية', bat: 'البطاريات', ctl: 'نظام سوتريك المنزلي', home: 'المنزل', online: 'متصلة', outage: 'منقطعة', gen: 'تولّد', night: 'لا توجد شمس',
    charging: 'شحن', discharging: 'تفريغ', idle: 'خاملة', batL: 'البطارية', loadL: 'حمل المنزل', on: 'تشغيل', off: 'إيقاف', ess: 'أساسي', non: 'غير أساسي',
    ac: 'المكيف', heater: 'السخان', fan: 'المراوح', light: 'الإنارة',
    modes: { grid: 'الشبكة + الشمسية', sb: 'الشمسية + البطاريات', bat: 'البطاريات فقط' },
    ev: { start: 'الشبكة + الشمسية — جميع الأحمال تعمل', off: 'انقطاع الشبكة — وضع البطاريات: إيقاف المكيف والسخان مع إبقاء المراوح والإنارة', sunset: 'غروب الشمس — البطاريات تغذي الأحمال الأساسية', on: 'عودة الشبكة — إعادة تشغيل المكيف والسخان' } },
};
const K3 = ['grid', 'solar', 'bat'], SY3 = [170, 385, 600], CT = { x: 360, y: 275, w: 260, h: 220 }, PORT3 = [345, 385, 425], BUS = 930;
const LOADS = [{ k: 'ac', x: 716, y: 152, ess: false, kw: 1.6 }, { k: 'heater', x: 954, y: 152, ess: false, kw: 1.8 }, { k: 'fan', x: 716, y: 393, ess: true, kw: 0.3 }, { k: 'light', x: 954, y: 393, ess: true, kw: 0.2 }];
const S3 = 'stroke="' + INK + '" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"';
const BLADES = '<ellipse cx="32" cy="15" rx="5" ry="9" fill="' + SKY + '"/><ellipse cx="32" cy="15" rx="5" ry="9" fill="' + SKY + '" transform="rotate(120 32 24)"/><ellipse cx="32" cy="15" rx="5" ry="9" fill="' + SKY + '" transform="rotate(240 32 24)"/><circle cx="32" cy="24" r="3" fill="' + INK + '"/>';
const BULB = 'M24 40 A14 14 0 1 1 40 40 V46 H24 Z';
const ICON3 = {
  ac: { base: '<rect x="6" y="12" width="52" height="24" rx="4" ' + S3 + '/><path d="M12 29 H52" ' + S3 + ' stroke-width="2"/><circle cx="50" cy="19" r="2" fill="#4ADE80"/>',
    on: '<path d="M16 44 q5 6 0 12 M32 44 q5 6 0 12 M48 44 q5 6 0 12" stroke="' + SKY + '" stroke-width="2.5" fill="none" class="dash" stroke-linecap="round"/>', off: '' },
  heater: { base: '<path d="M12 54 V26 a4 4 0 0 1 8 0 V54 M24 54 V26 a4 4 0 0 1 8 0 V54 M36 54 V26 a4 4 0 0 1 8 0 V54 M48 54 V26 a4 4 0 0 1 8 0 V54 M8 54 H60 M8 46 H60" ' + S3 + ' stroke-width="2.5"/>',
    on: '<path d="M20 16 q-4 -5 0 -10 M34 16 q-4 -5 0 -10 M48 16 q-4 -5 0 -10" stroke="#F59E0B" stroke-width="2.5" fill="none" stroke-linecap="round" class="pulse"/>', off: '' },
  fan: { base: '<circle cx="32" cy="24" r="20" ' + S3 + ' stroke-width="2.5"/><path d="M32 44 V58 M22 58 H42" ' + S3 + '/>',
    on: '<g>' + BLADES + '<animateTransform attributeName="transform" type="rotate" from="0 32 24" to="360 32 24" dur=".7s" repeatCount="indefinite"/></g>', off: BLADES },
  light: { base: '<path d="M25 51 H39 M27 57 H37" ' + S3 + '/>',
    on: '<circle cx="32" cy="28" r="24" fill="' + AMBER + '" opacity=".22" class="pulse"/><path d="' + BULB + '" fill="' + AMBER + '" ' + S3.replace('fill="none" ', '') + '/>', off: '<path d="' + BULB + '" ' + S3 + '/>' },
};

const flow3 = {
  id: 'residential', hold: 14000, text: T3,
  svg(lg) {
    const t = T3[lg], rtl = lg === 'ar';
    const X = (x) => rtl ? 1200 - x : x, A = rtl ? 'end' : 'start', R = (x, w) => rtl ? 1200 - x - w : x;
    const cx = CT.x + CT.w / 2, ex = 230;
    const fwd = (j) => 'M' + X(ex) + ' ' + SY3[j] + ' C ' + X(ex + 70) + ' ' + SY3[j] + ', ' + X(CT.x - 70) + ' ' + PORT3[j] + ', ' + X(CT.x) + ' ' + PORT3[j];
    const rev = (j) => 'M' + X(CT.x) + ' ' + PORT3[j] + ' C ' + X(CT.x - 70) + ' ' + PORT3[j] + ', ' + X(ex + 70) + ' ' + SY3[j] + ', ' + X(ex) + ' ' + SY3[j];
    const dot = (p, c, sc) => '<circle r="5.5" fill="' + c + '" stroke="' + sc + '" stroke-width="5"><animateMotion dur="1.2s" repeatCount="indefinite" path="' + p + '"/></circle>';
    const feed = 'M' + X(CT.x + CT.w) + ' 385 H' + X(BUS);
    return '<svg viewBox="0 20 1200 710" role="img" aria-label="' + t.title + '">' +
      '<polygon points="' + X(680) + ',130 ' + X(930) + ',34 ' + X(1180) + ',130" fill="rgba(14,38,66,.55)" stroke="' + LINE + '" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<rect x="' + R(700, 460) + '" y="130" width="460" height="510" fill="rgba(14,38,66,.55)" stroke="' + LINE + '" stroke-width="1.5"/>' +
      '<text x="' + X(930) + '" y="106" text-anchor="middle" fill="' + INK + '" font-size="16" font-weight="700">' + t.home + '</text>' +
      K3.map((k, j) => '<path d="' + fwd(j) + '" fill="none" stroke="' + LINE + '" stroke-width="2"/>' +
        '<g data-fl="' + k + '" style="transition:opacity .5s"><path d="' + fwd(j) + '" fill="none" stroke="' + AMBER + '" stroke-width="3" class="dash" stroke-linecap="round"/>' + dot(fwd(j), AMBER, 'rgba(227,199,154,.35)') + '</g>' +
        (k === 'bat' ? '<g data-fl="bat-in" style="transition:opacity .5s" opacity="0"><path d="' + rev(j) + '" fill="none" stroke="#4ADE80" stroke-width="3" class="dash" stroke-linecap="round"/>' + dot(rev(j), '#4ADE80', 'rgba(74,222,128,.35)') + '</g>' : '') +
        '<g data-tile="' + k + '" style="transition:opacity .5s">' +
        '<rect x="' + R(40, 190) + '" y="' + (SY3[j] - 55) + '" width="190" height="110" rx="8" fill="' + TILE + '" stroke="' + LINE + '" stroke-width="1.5"/>' +
        '<g transform="translate(' + R(46, 72) + ' ' + (SY3[j] - 36) + ') scale(.75)">' + ICON2[k] + '</g>' +
        '<text x="' + X(124) + '" y="' + (SY3[j] - 12) + '" text-anchor="' + A + '" fill="' + INK + '" font-size="15" font-weight="700">' + t[k] + '</text>' +
        '<text x="' + X(124) + '" y="' + (SY3[j] + 12) + '" text-anchor="' + A + '" fill="' + AMBER + '" font-size="14" font-family="' + MONO + '" data-kw="' + k + '">0 kW</text>' +
        '<text x="' + X(124) + '" y="' + (SY3[j] + 34) + '" text-anchor="' + A + '" fill="' + MUTED + '" font-size="12" data-sub="' + k + '">—</text>' +
        '<circle cx="' + X(216) + '" cy="' + (SY3[j] - 41) + '" r="4.5" fill="' + AMBER + '" class="pulse" data-led="' + k + '"/></g>').join('') +
      '<path d="' + feed + '" stroke="' + LINE + '" stroke-width="2"/>' +
      '<path d="' + feed + '" stroke="' + AMBER + '" stroke-width="3" class="dash" stroke-linecap="round"/>' + dot(feed, AMBER, 'rgba(227,199,154,.35)') +
      '<path d="M' + X(BUS) + ' 264 V505" stroke="' + AMBER + '" stroke-width="3" stroke-linecap="round"/>' +
      '<rect x="' + R(CT.x, CT.w) + '" y="' + CT.y + '" width="' + CT.w + '" height="' + CT.h + '" rx="10" fill="#1F4E8C" stroke="' + SKY + '" stroke-width="1.5"/>' +
      PORT3.map((y) => '<rect x="' + R(CT.x - 8, 8) + '" y="' + (y - 7) + '" width="8" height="14" rx="2" fill="' + SKY + '"/>').join('') +
      '<image href="' + MARK + '" x="' + (X(cx) - 18) + '" y="' + (CT.y + 20) + '" width="36" height="36"/>' +
      '<text x="' + X(cx) + '" y="' + (CT.y + 82) + '" text-anchor="middle" fill="' + INK + '" font-size="16" font-weight="700">' + t.ctl + '</text>' +
      '<rect x="' + (X(cx) - 90) + '" y="' + (CT.y + 98) + '" width="180" height="30" rx="15" fill="' + AMBER + '"/>' +
      '<text x="' + X(cx) + '" y="' + (CT.y + 118) + '" text-anchor="middle" fill="' + NAVY + '" font-size="13" font-weight="700" data-mode>—</text>' +
      '<text x="' + X(cx) + '" y="' + (CT.y + 158) + '" text-anchor="middle" fill="' + MUTED + '" font-size="12.5" data-csoc>—</text>' +
      '<rect x="' + (X(cx) - 80) + '" y="' + (CT.y + 168) + '" width="160" height="6" rx="3" fill="#0B1E35"/>' +
      '<rect x="' + (X(cx) - 80) + '" y="' + (CT.y + 168) + '" width="0" height="6" rx="3" fill="#4ADE80" data-cbar style="transition:width .6s"/>' +
      '<text x="' + X(cx) + '" y="' + (CT.y + 200) + '" text-anchor="middle" fill="' + MUTED + '" font-size="12.5" data-cload>—</text>' +
      LOADS.map((L) => {
        const lx = L.x + 95, sx = L.x < BUS ? L.x + 190 : L.x, sy = L.y + 112, ic = ICON3[L.k];
        return '<path d="M' + X(BUS) + ' ' + sy + ' H' + X(sx) + '" stroke="' + AMBER + '" stroke-width="3" data-stub="' + L.k + '" style="transition:stroke .4s"/>' +
          '<g data-card="' + L.k + '" style="transition:opacity .5s">' +
          '<rect x="' + R(L.x, 190) + '" y="' + L.y + '" width="190" height="225" rx="10" fill="' + TILE + '" stroke="' + LINE + '" stroke-width="1.5" data-cardr="' + L.k + '" style="transition:stroke .4s"/>' +
          '<text x="' + X(lx) + '" y="' + (L.y + 28) + '" text-anchor="middle" fill="' + (L.ess ? SKY : AMBER) + '" font-size="12" font-weight="700">' + (L.ess ? t.ess : t.non) + '</text>' +
          '<g transform="translate(' + (X(lx) - 38) + ' ' + (L.y + 42) + ') scale(1.2)">' + ic.base + '<g data-lon="' + L.k + '">' + ic.on + '</g><g data-loff="' + L.k + '" opacity="0">' + ic.off + '</g></g>' +
          '<text x="' + X(lx) + '" y="' + (L.y + 150) + '" text-anchor="middle" fill="' + INK + '" font-size="15" font-weight="700">' + t[L.k] + '</text>' +
          '<text x="' + X(lx) + '" y="' + (L.y + 172) + '" text-anchor="middle" fill="' + AMBER + '" font-size="13.5" font-family="' + MONO + '" data-lkw="' + L.k + '">0 kW</text>' +
          '<rect x="' + (X(lx) - 38) + '" y="' + (L.y + 186) + '" width="76" height="26" rx="13" fill="' + GREEN + '" data-swr="' + L.k + '" style="transition:fill .3s"/>' +
          '<circle cx="' + (X(lx) + 25) + '" cy="' + (L.y + 199) + '" r="9" fill="#FFFFFF" data-swk="' + L.k + '" style="transition:cx .3s"/>' +
          '<text x="' + (X(lx) - 8) + '" y="' + (L.y + 203.5) + '" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="700" data-swt="' + L.k + '">' + t.on + '</text></g>';
      }).join('') +
      '<rect x="' + R(40, 1120) + '" y="668" width="1120" height="46" rx="23" fill="' + PAPER + '"/>' +
      '<circle cx="' + X(66) + '" cy="691" r="5" fill="' + GREEN + '" class="pulse"/>' +
      '<text x="' + X(82) + '" y="696" text-anchor="' + A + '" fill="' + NAVY + '" font-size="14" font-weight="700" font-family="' + MONO + '" data-clock>13:00</text>' +
      '<text x="' + X(146) + '" y="696" text-anchor="' + A + '" fill="' + NAVY + '" font-size="14" font-weight="600" data-msg>—</text>' +
      '</svg>';
  },
  start(root, lg) {
    const t = T3[lg], rtl = lg === 'ar', q = (s) => root.querySelector(s);
    let tick = 0, soc = 68, wasOut = false, sunset = false, msg = '', at = '';
    const step = () => {
      const cyc = tick % 28, n = () => 0.95 + Math.random() * 0.1, min = 13 * 60 + cyc * 20, hr = min / 60;
      const clock = String(Math.floor(hr)).padStart(2, '0') + ':' + String(min % 60).padStart(2, '0');
      const say = (k) => { msg = t.ev[k]; at = clock; };
      const out = cyc >= 12 && cyc < 24;
      if (cyc === 0) { soc = 68; sunset = false; say('start'); }
      if (out && !wasOut) say('off');
      if (!out && wasOut) say('on');
      wasOut = out;
      const solar = Math.max(0, 3.4 * Math.sin(Math.PI * (hr - 6) / 13)) * n();
      if (out && solar < 0.05 && !sunset) { sunset = true; say('sunset'); }
      const on = { ac: !out, heater: !out, fan: true, light: true }, kw = {};
      LOADS.forEach((L) => kw[L.k] = on[L.k] ? L.kw * n() : 0);
      const load = LOADS.reduce((s, L) => s + kw[L.k], 0);
      let grid = 0, bat;
      if (!out) { bat = soc < 98 ? 0.8 : 0; grid = Math.max(0, load + bat - solar); }
      else bat = solar - load;
      soc = Math.max(5, Math.min(100, soc + bat * 1.6));
      const chg = bat > 0.05, dis = bat < -0.05, src = { grid, solar, bat: Math.abs(bat) };
      q('[data-mode]').textContent = !out ? t.modes.grid : solar > 0.05 ? t.modes.sb : t.modes.bat;
      q('[data-clock]').textContent = at; q('[data-msg]').textContent = msg;
      q('[data-csoc]').textContent = t.batL + ' ' + soc.toFixed(0) + '% · ' + (chg ? t.charging : dis ? t.discharging : t.idle);
      q('[data-cbar]').setAttribute('width', 160 * soc / 100);
      if (rtl) q('[data-cbar]').setAttribute('x', 1200 - 490 - 80);
      q('[data-cload]').textContent = t.loadL + ' ' + load.toFixed(2) + ' kW';
      K3.forEach((k) => {
        const flow = k === 'bat' ? dis : src[k] > 0.05, active = k === 'bat' ? (chg || dis) : flow;
        q('[data-fl="' + k + '"]').setAttribute('opacity', flow ? 1 : 0);
        q('[data-tile="' + k + '"]').setAttribute('opacity', active ? 1 : 0.45);
        q('[data-led="' + k + '"]').setAttribute('fill', active ? AMBER : '#4F5866');
        const sign = k === 'bat' ? (chg ? '+' : dis ? '−' : '') : '';
        q('[data-kw="' + k + '"]').textContent = k === 'grid' && out ? t.outage : sign + src[k].toFixed(2) + ' kW';
      });
      q('[data-fl="bat-in"]').setAttribute('opacity', chg ? 1 : 0);
      q('[data-socfill]').setAttribute('width', Math.max(2, 44 * soc / 100));
      q('[data-sub="grid"]').textContent = out ? t.outage : t.online;
      q('[data-sub="solar"]').textContent = solar > 0.05 ? t.gen : t.night;
      q('[data-sub="bat"]').textContent = soc.toFixed(0) + '% · ' + (chg ? t.charging : dis ? t.discharging : t.idle);
      LOADS.forEach((L) => {
        const k = L.k, o = on[k], lx = rtl ? 1200 - (L.x + 95) : L.x + 95;
        q('[data-card="' + k + '"]').setAttribute('opacity', o ? 1 : 0.5);
        q('[data-cardr="' + k + '"]').setAttribute('stroke', o ? LINE : WARN);
        q('[data-stub="' + k + '"]').setAttribute('stroke', o ? AMBER : '#4F5866');
        q('[data-lon="' + k + '"]').setAttribute('opacity', o ? 1 : 0);
        q('[data-loff="' + k + '"]').setAttribute('opacity', o ? 0 : 1);
        q('[data-lkw="' + k + '"]').textContent = kw[k].toFixed(2) + ' kW';
        q('[data-swr="' + k + '"]').setAttribute('fill', o ? GREEN : '#4F5866');
        q('[data-swk="' + k + '"]').setAttribute('cx', o ? lx + 25 : lx - 25);
        const st = q('[data-swt="' + k + '"]'); st.setAttribute('x', o ? lx - 8 : lx + 8); st.textContent = o ? t.on : t.off;
      });
      tick++;
    };
    step();
    const timer = setInterval(step, 1000);
    return () => clearInterval(timer);
  },
};

const FLOWS = [flow1, flow2, flow3];
const HOLD = 8000;

const css = (lg) => `
:host{display:block;width:100%;direction:${lg === 'ar' ? 'rtl' : 'ltr'};font-family:${FONT[lg]};color:${INK}}
.head{display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center;margin-bottom:22px}
.tabs{display:flex;gap:10px;justify-content:center;margin-top:24px}
.tab{position:relative;width:56px;height:20px;padding:0;background:transparent;border:0;cursor:pointer}
.tab::before{content:'';position:absolute;inset-inline:0;top:9px;height:3px;border-radius:2px;background:rgba(127,178,255,.25);transition:background .3s}
.tab:hover::before{background:rgba(127,178,255,.5)}
.tab i{position:absolute;inset-inline-start:0;top:9px;height:3px;width:0;border-radius:2px;background:${SKY}}
.tab[aria-selected="true"] i{background:${AMBER}}
.head{width:100%}
.head[hidden]{display:none}
.ttl{display:block;margin:0;width:100%;max-width:none;font-size:clamp(20px,2vw,28px)!important;line-height:1.35!important;font-weight:700;letter-spacing:0!important;text-transform:none;white-space:normal}
p{margin:0;max-width:820px;letter-spacing:0;font-size:clamp(15px,1.1vw,21px);line-height:1.6;color:${MUTED};text-wrap:pretty}
.stage{transition:opacity .5s}
.link{cursor:pointer}
.link:focus-visible{outline:3px solid rgba(227,199,154,.6);outline-offset:6px;border-radius:8px}
svg{width:100%;height:auto;display:block;overflow:visible;font-family:${FONT[lg]};direction:ltr}
.dash{stroke-dasharray:3 11;animation:dash 1.1s linear infinite}
.data{stroke-dasharray:8 8;animation:dash 1.6s linear infinite}
@keyframes dash{to{stroke-dashoffset:-28}}
.pulse{animation:pulse 1.4s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:.25}50%{opacity:1}}
@media (prefers-reduced-motion:reduce){.dash,.data,.pulse{animation:none}}
`;

class SutricSolutions extends HTMLElement {
  static get observedAttributes() { return ['lang', 'flow', 'bare']; }
  constructor() { super(); this.attachShadow({ mode: 'open' }); this.idx = 0; }
  connectedCallback() { this.render(); }
  disconnectedCallback() { this.stop && this.stop(); this.stop = null; clearTimeout(this.cycle); clearTimeout(this.swap); cancelAnimationFrame(this.raf); }
  attributeChangedCallback(n, o, v) { if (this.isConnected && o !== v) this.render(); }
  render() {
    this.stop && this.stop(); this.stop = null; clearTimeout(this.cycle); clearTimeout(this.swap); cancelAnimationFrame(this.raf);
    const lg = this.getAttribute('lang') === 'ar' ? 'ar' : 'en';
    this.lg = lg;
    const id = this.getAttribute('flow'), bare = this.hasAttribute('bare');
    this.list = id ? FLOWS.filter((f) => f.id === id) : FLOWS;
    if (!this.list.length) this.list = FLOWS;
    if (this.idx >= this.list.length) this.idx = 0;
    const multi = this.list.length > 1;
    this.shadowRoot.innerHTML = `<style>${css(lg)}</style>
      <div class="head"${bare ? ' hidden' : ''}>
        <div class="ttl" data-title></div><p data-desc></p>
      </div>
      <div class="stage" data-stage></div>
      ${multi ? `<div class="tabs" role="tablist">${this.list.map((f, i) => `<button class="tab" role="tab" data-i="${i}" aria-label="${f.text[lg].title}" title="${f.text[lg].title}"><i></i></button>`).join('')}</div>` : ''}`;
    this.shadowRoot.querySelectorAll('.tab').forEach((b) => b.onclick = () => this.show(+b.dataset.i));
    if (multi) {
      const open = () => { location.hash = 'sol-' + this.list[this.idx].id; };
      this.shadowRoot.querySelectorAll('.head, .stage').forEach((el) => {
        el.classList.add('link'); el.tabIndex = 0; el.setAttribute('role', 'link');
        el.onclick = open;
        el.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } };
      });
    }
    this.show(this.idx, true);
  }
  show(i, instant) {
    const r = this.shadowRoot, stage = r.querySelector('[data-stage]');
    this.stop && this.stop(); this.stop = null; clearTimeout(this.cycle); clearTimeout(this.swap); cancelAnimationFrame(this.raf);
    this.idx = i;
    const f = this.list[i], hold = f.hold || HOLD, go = () => {
      r.querySelector('[data-title]').textContent = f.text[this.lg].title;
      r.querySelector('[data-desc]').textContent = f.text[this.lg].desc;
      stage.innerHTML = f.svg(this.lg); stage.style.opacity = 1;
      this.stop = f.start(stage, this.lg);
      r.querySelectorAll('.tab').forEach((b, k) => { b.setAttribute('aria-selected', k === i); b.querySelector('i').style.width = '0'; });
      if (this.list.length > 1) {
        const bar = r.querySelector(`.tab[data-i="${i}"] i`), t0 = performance.now();
        const tickBar = (now) => { const k = Math.min(1, (now - t0) / hold); bar.style.width = k * 100 + '%'; if (k < 1) this.raf = requestAnimationFrame(tickBar); };
        this.raf = requestAnimationFrame(tickBar);
        this.cycle = setTimeout(() => this.show((i + 1) % this.list.length), hold);
      }
    };
    if (instant) go(); else { stage.style.opacity = 0; this.swap = setTimeout(go, 450); }
  }
}
if (!customElements.get('sutric-flows')) customElements.define('sutric-flows', SutricSolutions);
})();
