import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, FileText, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const subjects = {
  'economics': { name: 'الإقتصاد', color: '#3B82F6' },
  'management': { name: 'التسيير', color: '#8B5CF6' },
  'accounting': { name: 'المحاسبة', color: '#10B981' },
  'law': { name: 'القانون', color: '#F59E0B' },
  'mathematics': { name: 'الرياضيات', color: '#EF4444' },
  'arabic': { name: 'اللغة العربية', color: '#6366F1' },
  'french': { name: 'اللغة الفرنسية', color: '#EC4899' },
  'english': { name: 'اللغة الإنجليزية', color: '#0EA5E9' },
  'islamic': { name: 'العلوم الإسلامية', color: '#14B8A6' },
  'history': { name: 'التاريخ والجغرافيا', color: '#F97316' },
  'philosophy': { name: 'الفلسفة', color: '#9333EA' },
  'amazigh': { name: 'اللغة الأمازيغية', color: '#8B5CF6' }
};

// PDF links for law subject
const lawPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/1lY-9JwulzZLj1smCJ_oLI8SFH9mL-0tJ/view',
    solution: 'https://drive.google.com/file/d/1iFAfshIumhhqViSjMamxvjL0AFFr5Jfz/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/d/1gTJjYqRKpaUwHlZv-Y3UEHHhbS4GKcGs/view',
    solution: 'https://drive.google.com/file/d/1066ZyDe_9wF-farv-cdOBM49mfR6ftCn/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/1fmJH23-URSurIXUSz_R3OpaFTHOOhmZs/view',
    solution: 'https://drive.google.com/file/d/13nwvsTRoaWRQoproj8RtFoc1mvye3eiw/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/1bkBZiSg_2AlVwnkjk6UAMw-OWPEoI9DW/view',
    solution: 'https://drive.google.com/file/d/1sRCXiDPvmqZfIjr9dghS-q0FuwkDw1gx/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/1FMmjS4zV43re4Cft5oOdVW0NuqYfT_Wg/view',
    solution: 'https://drive.google.com/file/d/1PXj6FCJuo8hbjduXouR9iqtuAD8zjtIk/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/1e_UdJAyWIvLWjZPjdRTD0WTEDOulXUNj/view',
    solution: 'https://drive.google.com/file/d/1HYQ37QNzir-XRoQRwUyforXKU_JzBGPq/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/1xsNeFjBMNJJZkMLAIA9RWZAGUhu-8wwN/view',
    solution: 'https://drive.google.com/file/d/1a0ez9kQ1nx6w0rcdptrxaXJTSPJBh9U1/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1QIW5Ey0zV9Bx42H1qJ3NsNWIZqax_AnQ/view',
    solution: 'https://drive.google.com/file/d/1eMFZ4Q5nQlg-l8DjjCaqAUiRwuyDpH9N/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/1ld5KLTs-zofUAJ0o76MuVt8d2o5VGHLr/view',
    solution: 'https://drive.google.com/file/d/1VD9pMpRduznMPFWS6vZqMTgalCKDNwGO/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/1qoiGD98zsJJVxs26xpcumd6EY5MoSNK3/view',
    solution: 'https://drive.google.com/file/d/12XeBdLDLinI01hkOCF1LQcNY--vjREja/view'
  }
};

// PDF links for accounting subject
const accountingPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/1zkFCCEUa11Y-GKYvQAB069BQDfU1LrQI/view',
    solution: 'https://drive.google.com/file/d/1y2POfJbtg8w66T-ZZTBY8t1ziJHyKCO4/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/d/15mp6bOaefRkiB4--C2KcurmBzTwm1zkW/view',
    solution: 'https://drive.google.com/file/d/12JV3RzwfvWh16bVhnqVA44jkwFOVyRUo/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/1WobIoQR36h2mCBSpVljPeieYch-gdesw/view',
    solution: 'https://drive.google.com/file/d/1HNemMvQ9FMDUBrc8KPrFYJUHfx4v4LoE/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/1_uo1sa-UwxSkHdbaZnck-lCmJX5XKme5/view',
    solution: 'https://drive.google.com/file/d/1I8fWYq_TsOa_EWzHbGnyvAcC0NLn8HWP/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/1fcpRZJ4R-LCx8kNv_mHOAhCHcFT1hHNZ/view',
    solution: 'https://drive.google.com/file/d/1mdcgYhGR2m_VkdBnm-mSwK0N5ZNlYXu1/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/1Mvz6KWZDbwBEUC8K8xG5v-NjrYe3bDcW/view',
    solution: 'https://drive.google.com/file/d/16z4GeffhTynVnyy9zP70GiwKPNFqPhFy/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/1py6LhlCH24lw4wCd7WlSOT2qZWwTSksq/view',
    solution: 'https://drive.google.com/file/d/1TmWWfeGG8lS5-DNtJLYx7csXI3R6Nzvs/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1rmCCFftf12zGh6pmWo5bMa_-3azJ5vq9/view',
    solution: 'https://drive.google.com/file/d/14_Qt3eY-HhVdWKew0i0OoRID2KzdjR_q/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/15HGPKO2csnX7Dd69-ABMGMFa3X9Xg4RT/view',
    solution: 'https://drive.google.com/file/d/1Oenhm_vAdITWOU6rAqT5ksI4IN7nO1r6/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/1chhlHsZZQ6Wti-Shz6Jjp5t3zggpNhug/view',
    solution: 'https://drive.google.com/file/d/1T_GpS0O4J_MZZPFf_ph2E-0k1ZWegubM/view'
  }
};

// PDF links for economics subject
const economicsPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/1KFStDQerfCvw4-L8IVyaytXOnpxRo74j/view',
    solution: 'https://drive.google.com/file/d/1dpDSn76iTv_Br2Y-zm163qatYYRFZ03h/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/d/1Kw6ewe1s8xvZwhQ-gPJIBhb8CD-OJZan/view',
    solution: 'https://drive.google.com/file/d/1yg2RBzxCwdrOu58ECaIe_WSQw4NGJxZU/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/151gia9nEhm0DrHiU3l5pgPMzoXEJNhcY/view',
    solution: 'https://drive.google.com/file/d/1h13o-g3jtbqi5nbLnoYOMI33Xi14mD8k/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/1TeMoc5x5IjlKbmsSpoYlNA7saPAPttMF/view',
    solution: 'https://drive.google.com/file/d/1su_w4fnAbLKHe_wf9l6l_ooDX86VLZQ4/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/1gQlNzNdzGd3m3Yb1nkrOow7zypsXn5DE/view',
    solution: 'https://drive.google.com/file/d/1V_DrHFesYJlHMmD5NDbubN03VT6nBeAy/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/1ufTIY3ic9k3DqHQ0czx7QecCkzlrpVAe/view',
    solution: 'https://drive.google.com/file/d/1Odnc0t_b-1R_WmDaCtm5htsBxcUnnVNt/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/16R5jgmKV7_pQrFSaNg4Qo4f_0x9Avj2P/view',
    solution: 'https://drive.google.com/file/d/1pw8zv264-PdwkuuWLQJgna264fTkkA3G/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1xCOtAjnZf_l3NMX1Tk6Kmiq6uaOCllF6/view',
    solution: 'https://drive.google.com/file/d/1tLLdq--tLilwXsV6XrAFyuQ26TJAKFt3/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/1xDDeNyviC41IXL26m29C_qMVw4telr4y/view',
    solution: 'https://drive.google.com/file/d/1rk57jCszS63t_vY1hO4xLPbonWRNysz4/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/1vHWdtk0JoADOYbXYfOWiU-s9wczsI_ZS/view',
    solution: 'https://drive.google.com/file/d/1kM6SGvKCMQX0xKbju-K1ijL_eIEvtado/view'
  }
};

// PDF links for mathematics subject
const mathematicsPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/168h8-bFUngdfaLvE5_4BRu_DEVrCylee/view',
    solution: 'https://drive.google.com/file/d/1p6b-Z0dY4XqMIb-JuclrWOCMtHos3iOQ/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/d/1CeHt56FC_5jyN68sb2A4HrhOpKvQ2ZUK/view',
    solution: 'https://drive.google.com/file/d/19Px5IG54VTpgdIuqegYqukCIQJOSAkE5/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/1Pf0y3cQQXbFvwH5aAD_3rOvc58jviX8X/view',
    solution: 'https://drive.google.com/file/d/1-mGqCuR6vxVPSn4PwU5d_ejLEDpwfCPm/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/1ZOTWNPTS1kPQ2c6xcG7SdI2_qW_tin3w/view',
    solution: 'https://drive.google.com/file/d/1KyF4hjAxApIC1h1rLHr0ST5DQkF4eRGZ/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/1eZUnWF7DJhEMZYdi0_LXgI6wXTuo2hu5/view',
    solution: 'https://drive.google.com/file/d/16eY3u3ENq3oiKjHoD-DD8hukdpr2Qq_u/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/19MppycuLMSaa5qr-7gLCIw57exksIv9b/view',
    solution: 'https://drive.google.com/file/d/1FWI9l6gF3aa5xsA96lPKk2YI6N8PRMiE/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/19hKhJFsO-hDAU3AokpQftQGRopKP1Hs-/view',
    solution: 'https://drive.google.com/file/d/1G2TFsvMfxvkPI1l2g00EOrvelrCPkWNQ/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1xXB0JJkRATxl0UwrdUYBDrGn0UXQcR_P/view',
    solution: 'https://drive.google.com/file/d/1B8OUD8upBhy274Dm6ASX2PTZEUFxueUW/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/1lH5D9ysssza_SjLZeC8EHgDEnflpmTbh/view',
    solution: 'https://drive.google.com/file/d/172BVo2vw3Q-O_K4eB7zfMoDVyw89W9Sw/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/1TqvI3ffG4rVnu1sPCuiGyQL0BFjydlQd/view',
    solution: 'https://drive.google.com/file/d/19anotAa_mrfGdUgRviaYimqE1QWXhYkI/view'
  }
};

// PDF links for history and geography subject
const historyPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/14ei0VsOGJcQgU-y15Nx_LUGjCDEgPc1a/view',
    solution: 'https://drive.google.com/file/d/1mjIC877oJnpdiJMX4L8fqGpRxvKFtRIh/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/d/1HoK4He7mK3eXliC5h8K7T0Al-lcsbKKo/view',
    solution: 'https://drive.google.com/file/d/1H1ueOjjUibDPEG2ZWZKYGL_DV801O99t/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/1tuk6strLpOztpgBPYMRPBYVzKZ38zc48/view',
    solution: 'https://drive.google.com/file/d/1VTtQ-CJGWvOuFR8KQMc-nlcKh-KwVwkN/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/10QXk1Eksjo8pwgGlvSfrj-3bBVzemHd2/view',
    solution: 'https://drive.google.com/file/d/1XAQdtSvo90xmn7LrJPGmVLuEGYo9U5LH/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/1_B8s044L2it3BI25bOwmuHVTWr1lPWEQ/view',
    solution: 'https://drive.google.com/file/d/19kqZ_9s9u4T81Aw2i0vDZ3af5iAv6zfJ/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/1ocmgn_ZtRWSoYPNxod1WDa_d5v1H4VqT/view',
    solution: 'https://drive.google.com/file/d/1fwFL_Ysd77FjM8y9o9QOhoUX3qAdGDHU/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/1iwDsOkiC81kiMIg3-a1QBUXQH71McCBT/view',
    solution: 'https://drive.google.com/file/d/10RnLeiozE3iYYVxSogFz7KNyuEv0PDIt/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1-xklWAnv1XJQJYWR0Qt6aZr7EeiT3JZp/view',
    solution: 'https://drive.google.com/file/d/1_qdDA2pLMF9q0wD1kv4LNP1Gddw80QQv/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/1KRr2dJgUbsVcegL9PjLoalCjIHjlxDTT/view',
    solution: 'https://drive.google.com/file/d/1TMvQ5cN_zTTBLrg_bsSiPDoqevV4AlIb/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/1RdEw16XaLvrGlMvlQNqpAYzKeuPMrX-d/view',
    solution: 'https://drive.google.com/file/d/1KHECqjME46g2qeyUUP65qZcWAlSuF1qA/view'
  }
};

// PDF links for Arabic language subject
const arabicPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/1XOC0hENf_ZZjVN0I2xFrQl0pKtVpAqxx/view',
    solution: 'https://drive.google.com/file/d/1aPazk6Lz5I0oQLlP0IAEWGkRKWkgMOcI/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/d/15B6lj8Ue8XMGdO9RQuxVd-m6OM6iihgF/view',
    solution: 'https://drive.google.com/file/d/1ijFkN9Xl-BwBSphHnHSpJLs3rGVPZuym/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/1hQIG8hlQ1TeeGbjPnwCB8LK09hiRbj4l/view',
    solution: 'https://drive.google.com/file/d/1Can7d1zNy4IZWKt4p-ysNJvKremvhvBx/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/1i3tbKf5gRCFNgOV3fX-F7-kha4tegOGe/view',
    solution: 'https://drive.google.com/file/d/1FGNcn-cFoHhOoUZjfGqdohswEEQlWEmn/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/17RQw8Ighq60Td_p6g-Hs0RFnlNGvuG5E/view',
    solution: 'https://drive.google.com/file/d/1WnPscZMS5sjFr3xrjlq1_ESWWL6ErhYR/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/1XsrjTEtb9o-Zu_CZxL2jv2Up9C8nz2iu/view',
    solution: 'https://drive.google.com/file/d/1fXVxLXsBeO8gUTpV9vHO9jhxjXAtTuPN/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/1pBu8dN5QcKPqgVZgTsoXAc4olP5r4Lhq/view',
    solution: 'https://drive.google.com/file/d/1y5LSv2muwK9SRpdLb0NdhdwnMz6gewbq/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1Isc8xXtf7SCOL5-UA5oLdxT0x_0yHSY3/view',
    solution: 'https://drive.google.com/file/d/13ZtLIYsFF2IfMBuFpPggxuEIQe552n39/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/168iu2oYL5qlZCUtLDJ_QSzaJBk2z7gpw/view',
    solution: 'https://drive.google.com/file/d/1wx8hZzAqmKI7nFwTEB2Qi3IXeXcCpid7/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/1_RQbv31uwdmit_M-VIFY_y-4cDpnppHb/view',
    solution: 'https://drive.google.com/file/d/12XeBdLDLinI01hkOCF1LQcNY--vjREja/view'
  }
};

// PDF links for Islamic sciences subject
const islamicPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/17Ir0JCg27DHfcdrqxDxMLBKFy5ALvdey/view',
    solution: 'https://drive.google.com/file/d/16Ovbs4WYBoUN8fmoYsiVMjL86VIA6g-e/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/d/1Tz2r28Dw2dYd7esRLh4vtZHYByF-r57X/view',
    solution: 'https://drive.google.com/file/d/153EYrK6dB381O5qaexUQE8zSk9AlxYm1/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/1E7aCOia76WYSogNanmLf3Yrnf_iwtFcV/view',
    solution: 'https://drive.google.com/file/d/1hTe1HRAhfbMec1W4lgGAWzPnusCCkrhr/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/1kr6Vr4GFdyTpAN8WF2GWMVTwdBEwbqfW/view',
    solution: 'https://drive.google.com/file/d/1bDepJ8XsGrvBxylVxA0PBnk49Yf9s2p8/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/1aaKy8QAicTQ6A4xmgX3MgXGF82hjnzVq/view',
    solution: 'https://drive.google.com/file/d/1TjcBPZDYtRpL8u2ZOapD6dwDitgJDueq/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/1GCLIqXrMNoAHKWNxtLdJg5ZDE5YvR8HY/view',
    solution: 'https://drive.google.com/file/d/1xdnXHsXZIulPhACixt-C8cOYzDTphoYp/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/1ODdW1IYqIdNhmzpkYK7WjJ_D-yKXg6FP/view',
    solution: 'https://drive.google.com/file/d/1SfDIaglMAuTY11t-vmJhA_is7YkeQpNK/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1f6ZMcNqVrWFa8iRCIWYOmFaElndAWy2y/view',
    solution: 'https://drive.google.com/file/d/1WXNvQ-OmVgVwNgBSNuFSC08dZQyRJ6sP/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/1e74TwT2NxC14vSn_cXGD0Ph5haCXAsQe/view',
    solution: 'https://drive.google.com/file/d/1K7Bn0KsGQYzlsHq2sFY-6XQN_jhyjNDr/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/1SnnBau4WGj_ZMCHmwO-WUVukq1Z5PUhw/view',
    solution: 'https://drive.google.com/file/d/1spxwXAwAb-ibr9Hwjw_T6vi3BPYlzpG4/view'
  }
};

// PDF links for Philosophy subject
const philosophyPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/1ZcCijjt8U8soc_JBGvaGmmNJob5GarEk/view',
    solution: 'https://drive.google.com/file/d/1Rw73jIJO8JW2dXyQouMfdxdB37NrAtVk/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/u/0/d/1M4eiUx6lt1f_x95f9PMObgxUOtVRv8xF/view',
    solution: 'https://drive.google.com/file/d/1Yh67G0PisjORD_BotZxs9czmcY_kBhcI/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/1OQex7KvmQ3Gxof35KbmP4e0QkdUOXlk7/view',
    solution: 'https://drive.google.com/file/d/1fi5-MPFjz0nJXJPpWNjOgmTmw54idKgF/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/1OCulgrsAsnku0V_2b5CP4LAaklHmna70/view',
    solution: 'https://drive.google.com/file/d/1mjXmJVnz79YUDHFQe8ksNcf-wkcykw9d/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/1_XvO618AN-kHYH6UR2OJ18He3_fO_vjt/view',
    solution: 'https://drive.google.com/file/d/1MN1sakL-udsg8Nhc80zZLeKH9iCHM4qN/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/1OBkMIvmRYqGRUcP0W-XYNURUOPbhPIe-/view',
    solution: 'https://drive.google.com/file/d/1sZ79PgZum36mQkA7qf56y9TK0WnIaJv4/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/1ASkZnL0t3ZGlQ4fTzqYCd97WccMLe9Ot/view',
    solution: 'https://drive.google.com/file/d/1m0MaSSVyHPTEw-QWZ_QYTvfEJnKvwQy1/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1UfdEqByzuMTKX5MxXY9uR9jdZMvXMh3u/view',
    solution: 'https://drive.google.com/file/d/1s_HqkjDFjt4aiNz-H_kSiDXAcHSgXnya/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/1pUsSnMfQRCmRKirqyHOFvQMc7kS4kalD/view',
    solution: 'https://drive.google.com/file/d/1rtrHthyFi4zBRPQ2GYixgAEq8R4yAdaT/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/14Y5b32ZGrPEXMCjYsTnudzjxOGjVoTDn/view',
    solution: 'https://drive.google.com/file/d/1w021Qi5AhOBjoYt8ZRU02Jb11nvVY0l2/view'
  }
};

// PDF links for French language subject
const frenchPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/1RZgLYWKKDbHYO42PlkjezcCAWf74_8j3/view',
    solution: 'https://drive.google.com/file/d/1Bz9EAd7UCALTikIzM_qmcoKoX6pPSeyw/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/d/1Pzz2QHJhdpf6mnuwIUlxIQh4Vqn6p7ed/view',
    solution: 'https://drive.google.com/file/d/1eAzFN6R4wTZ68kzgeTdaw8iSKDkKf0Bn/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/1yg5F0QMuNFbnYzR7qUjR-Pees_e-93cV/view',
    solution: 'https://drive.google.com/file/d/1oFtwviBvhP-iN-dU-ljeO-5BpDQP9tHc/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/191qB5ECblUVc_DLl1oXw1rHdXjZMJN0z/view',
    solution: 'https://drive.google.com/file/d/1jFGaBmsG6HqTz7QrEQq4ef1yF7Hn4-ot/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/1a-WLzu7U606hGZeIlf6pD25iLlrRcYjl/view',
    solution: 'https://drive.google.com/file/d/1vv4A_R0vDr8Z9KsWw4k_9Mrn7lfNjW0n/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/1eN8XdLkhQVfssMaFSxctT7O-0PyAUkeH/view',
    solution: 'https://drive.google.com/file/d/1tSm8X-VvSOWk-BsylQji00FawJi-CF0H/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/1s79snMJY1R7sJOPyFt1uTEwDWgJ2X2aR/view',
    solution: 'https://drive.google.com/file/d/1rfIfxdG5R13RUWjde8a3l1oIYAu8yXkd/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1KiEA1Nz1VdCLH4EYnC00TA-qclYCCDNL/view',
    solution: 'https://drive.google.com/file/d/1c3-6QDA6smFDf4Kkk3feuZHLQAYJhIZm/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/1jWhlZiQTamuwCmEv-pLH01t3zRVfrQeT/view',
    solution: 'https://drive.google.com/file/d/1JBBw8uC5XIQwXnv3kwErf9r4ep7Zr_SH/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/1_EWdpZPElhwFDU2WL6xH_5k19yGxgI2g/view',
    solution: 'https://drive.google.com/file/d/15RwZLJMWqtSqv5UD6b6n4PDjBAtN5s_2/view'
  }
};

// PDF links for English language subject
const englishPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/1uczBSa5wMQtXDQGNPL8-ebhYa2ZB7tC9/view',
    solution: 'https://drive.google.com/file/d/1qAitS62_G71rAQYdQ48y9lCasQxvi5Ro/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/d/1MNxGl78fH_2KmccYtDxofQbCpRGgoYaT/view',
    solution: 'https://drive.google.com/file/d/1ewyWvFuvptWC5LD0ykc81GourzufZSfG/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/1EPaQm3z4QYqsU6En3vJrG9SVFNFGGYhO/view',
    solution: 'https://drive.google.com/file/d/1j0ke-De9_jhadvKrtENvrvu2q7Uc6Dks/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/1IcYtPBlNDEksEL56fF99FBNYHIcm3qdN/view',
    solution: 'https://drive.google.com/file/d/11QJAw0OvxCe_d27n5lPcMyWa1MdHhsoZ/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/1LcOZWMbRXzblFnbVCLmdH4yQX2WFNCWE/view',
    solution: 'https://drive.google.com/file/d/1eDIX5_IKO1n6mNmXVOlGOrIp_E0bWyWf/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/1oiHvgSue8pOTR8MWVxDKRxjCPpE86BcX/view',
    solution: 'https://drive.google.com/file/d/1I4aOwUP_v5g7xVHexFs6MAM7ymTSedid/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/1iOGCx1TwsTgWs2Q7RAMUn4_oxrTi7xx3/view',
    solution: 'https://drive.google.com/file/d/187F19mbmrawIA37Pr7-fs6FqF-QC4MJL/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1szuZWpjn5XMAjPMAtTunnnOgywDTRkuo/view',
    solution: 'https://drive.google.com/file/d/1mJHuDbALaNUxNxrwySK6jcbLvY34Nrpo/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/1Ht9zJX_QjCQG15i4aBAHwGCL3JNWmr6Q/view',
    solution: 'https://drive.google.com/file/d/1KHTkgP-u9UL6D80y_5K8Gf-ZMqcWgjYc/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/1C5jMcQsVOLrN6lXmSs9YNypGESSUDYLO/view',
    solution: 'https://drive.google.com/file/d/1lir2_0DQyivcYHbqIuCm-oV9yzq7siAX/view'
  }
};

// PDF links for Amazigh language subject
const amazighPdfLinks = {
  '2022': {
    exam: 'https://drive.google.com/file/d/1toxqCp8Jyr0Bp7jiBITjNQvdqazhewSC/view',
    solution: 'https://drive.google.com/file/d/1C_IykfD2VDSZj9uOPmFs4iwyBSBKASaO/view'
  },
  '2021': {
    exam: 'https://drive.google.com/file/d/1x0sdK7SBfBIM72vTLw30qLFlQPYWItzI/view',
    solution: 'https://drive.google.com/file/d/12DMMng6e0B_WymkqjMzV8iZuCILRtcqD/view'
  },
  '2020': {
    exam: 'https://drive.google.com/file/d/1ZtNBUUD5JsXViz-URwaTXLmiqChZiDRj/view',
    solution: 'https://drive.google.com/file/d/14aH-1T89X2eCFAl35F4fhNaV6OGwx5L_/view'
  },
  '2019': {
    exam: 'https://drive.google.com/file/d/1CBMkso049juAC0dPS2qznrYSbYob2Tjz/view',
    solution: 'https://drive.google.com/file/d/1lKpPXTDcXYIREU2NkdzA2W53sFbU0PXA/view'
  },
  '2018': {
    exam: 'https://drive.google.com/file/d/1d8-Bj7cqlm-QfRQ_x0oI3_8RxtkeC0g4/view',
    solution: 'https://drive.google.com/file/d/1mcTlJGsZ0K-TPnaFQqNQ5MqnhoRu3IOQ/view'
  },
  '2017': {
    exam: 'https://drive.google.com/file/d/1MNzzZhwgTD1ACScLXMwoztuPCC3Aerch/view',
    solution: 'https://drive.google.com/file/d/16OvrCRaRBDCBuHtxUE63MOyhbrDE8kON/view'
  },
  '2016': {
    exam: 'https://drive.google.com/file/d/1PJxl4ybvOpPjuCyR500Dfe9_GBgFzKDx/view',
    solution: 'https://drive.google.com/file/d/1JgWe75c78s-FD3nR8D0j83ju4Omtiu5c/view'
  },
  '2015': {
    exam: 'https://drive.google.com/file/d/1GmcerfOS8T6kgA_kxaIQBe_Z6cJZsfwI/view',
    solution: 'https://drive.google.com/file/d/1GF3-amn4TFsVc8BBhYsgElY0_UCz-DUm/view'
  },
  '2014': {
    exam: 'https://drive.google.com/file/d/1oGDw473rkNfY5i-0N7tbI6iKEbWO_jYX/view',
    solution: 'https://drive.google.com/file/d/13wtumoEBuduzhb_cbPvpVa_1V3q68PNb/view'
  },
  '2013': {
    exam: 'https://drive.google.com/file/d/1wwAUGwKtRBsXJDWCBxZsBR-qbqaIaDMB/view',
    solution: 'https://drive.google.com/file/d/1EsYaVD7B8zEho8gRW3Uw2Oc_w6tWIvTe/view'
  }
};

export default function YearContent() {
  const { subjectId, year } = useParams<{ subjectId: string; year: string }>();
  const [activeTab, setActiveTab] = useState<'exams' | 'solutions'>('exams');
  
  if (!subjectId || !subjects[subjectId as keyof typeof subjects] || !year) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            المحتوى غير موجود
          </h2>
          <Link to="/" className="text-blue-600 dark:text-blue-400 mt-4 inline-block">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    );
  }
  
  const subject = {
    id: subjectId,
    ...subjects[subjectId as keyof typeof subjects]
  };
  
  // Get PDF links based on subject
  const getPdfLinks = () => {
    if (subjectId === 'law' && lawPdfLinks[year as keyof typeof lawPdfLinks]) {
      const links = lawPdfLinks[year as keyof typeof lawPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    } else if (subjectId === 'accounting' && accountingPdfLinks[year as keyof typeof accountingPdfLinks]) {
      const links = accountingPdfLinks[year as keyof typeof accountingPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    } else if (subjectId === 'economics' && economicsPdfLinks[year as keyof typeof economicsPdfLinks]) {
      const links = economicsPdfLinks[year as keyof typeof economicsPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    } else if (subjectId === 'mathematics' && mathematicsPdfLinks[year as keyof typeof mathematicsPdfLinks]) {
      const links = mathematicsPdfLinks[year as keyof typeof mathematicsPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    } else if (subjectId === 'history' && historyPdfLinks[year as keyof typeof historyPdfLinks]) {
      const links = historyPdfLinks[year as keyof typeof historyPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    } else if (subjectId === 'arabic' && arabicPdfLinks[year as keyof typeof arabicPdfLinks]) {
      const links = arabicPdfLinks[year as keyof typeof arabicPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    } else if (subjectId === 'islamic' && islamicPdfLinks[year as keyof typeof islamicPdfLinks]) {
      const links = islamicPdfLinks[year as keyof typeof islamicPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    } else if (subjectId === 'philosophy' && philosophyPdfLinks[year as keyof typeof philosophyPdfLinks]) {
      const links = philosophyPdfLinks[year as keyof typeof philosophyPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    } else if (subjectId === 'french' && frenchPdfLinks[year as keyof typeof frenchPdfLinks]) {
      const links = frenchPdfLinks[year as keyof typeof frenchPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    } else if (subjectId === 'english' && englishPdfLinks[year as keyof typeof englishPdfLinks]) {
      const links = englishPdfLinks[year as keyof typeof englishPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    } else if (subjectId === 'amazigh' && amazighPdfLinks[year as keyof typeof amazighPdfLinks]) {
      const links = amazighPdfLinks[year as keyof typeof amazighPdfLinks];
      return [
        {
          id: 1,
          title: `موضوع باكالوريا ${year}`,
          type: 'exams',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.exam
        },
        {
          id: 2,
          title: `حل باكالوريا ${year}`,
          type: 'solutions',
          fileSize: '2-3 MB',
          fileType: 'PDF',
          url: links.solution
        }
      ];
    }
    
    // Default documents for other subjects (if no specific links are available)
    return [
      {
        id: 1,
        title: `موضوع باكالوريا ${year}`,
        type: 'exams',
        fileSize: '2-3 MB',
        fileType: 'PDF',
        url: `#/files/${subjectId}/${year}/exam.pdf`
      },
      {
        id: 2,
        title: `حل باكالوريا ${year}`,
        type: 'solutions',
        fileSize: '2-3 MB',
        fileType: 'PDF',
        url: `#/files/${subjectId}/${year}/solution.pdf`
      }
    ];
  };
  
  const documents = getPdfLinks();
  const filteredDocuments = documents.filter(doc => doc.type === activeTab);

  const openPdfDirectly = (url: string) => {
    // For Google Drive links, make sure they open directly
    window.open(url, '_blank');
  };
  
  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center mb-8 flex-wrap">
        <Link 
          to="/" 
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2 sm:mb-0"
        >
          <span>الرئيسية</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <Link 
          to={`/subject/${subject.id}`} 
          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2 sm:mb-0"
        >
          <span>{subject.name}</span>
          <ChevronRight size={16} className="mx-2" />
        </Link>
        <span className="text-gray-900 dark:text-white font-medium">
          بكالوريا {year}
        </span>
      </div>
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          {subject.name} - بكالوريا <span style={{ color: subject.color }}>{year}</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          مواضيع وحلول باكالوريا {year} لمادة {subject.name}
        </p>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 p-1">
        <button 
          onClick={() => setActiveTab('exams')}
          className={cn(
            "flex-1 py-2 px-4 rounded-md text-center transition-colors",
            activeTab === 'exams' 
              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" 
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
        >
          المواضيع
        </button>
        <button 
          onClick={() => setActiveTab('solutions')}
          className={cn(
            "flex-1 py-2 px-4 rounded-md text-center transition-colors",
            activeTab === 'solutions' 
              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" 
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
        >
          الحلول
        </button>
      </div>
      
      {/* Files */}
      <div className="grid gap-4 pb-16">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc) => (
            <div 
              key={doc.id}
              onClick={() => openPdfDirectly(doc.url)}
              className="flex items-center justify-between bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover-lift hover:border-blue-200 dark:hover:border-blue-900/50 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg ml-4">
                  <FileText size={24} className="text-blue-700 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {doc.fileType} • {doc.fileSize}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Open"
                >
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              لا توجد ملفات متوفرة حاليًا
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
