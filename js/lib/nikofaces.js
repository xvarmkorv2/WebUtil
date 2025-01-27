const FACES = {
	Niko: [	
		'niko_normal',
		'niko2',
		'niko3',
		'niko4',
		'niko5',
		'niko6',
		'niko_disgusted',
		'niko_distressed',
		'niko_distressed2',
		'niko_distressed_talk',
		'niko_shock',
		'niko_shocked',
		'niko_what',
		'niko_what2',
		'niko_wtf',
		'niko_wtf2',
		'niko_yawn',
		'niko_eyeclosed',
		'niko_eyeclosed_sigh',
		'niko_sunglasses',
		'niko_popcorn',
		'niko_smile',
		'niko_owo',
		'niko_83c',
		'niko_owoc',
		'niko_uwu',
		'niko_xwx',
		'niko_wink',
		'niko_winkc',
		'niko_winkp',
		'niko_derp',
		'niko_speak',
		'niko_pancakes',
		'niko_surprise',
		'niko_shy',
		'niko_blush',
		'niko_blushier',
		'niko_oof',
		'niko_ouch',
		'niko_thinking',
		'niko_fingerguns',
		'niko_gasmask',
		'niko_teary',
		'niko_distressed_cry',
		'niko_crying',
		'niko_wipe_tears',
		'niko_upset',
		'niko_upset_meow',
		'niko_upset2',
		'niko_really',
	],
	WorldMachine: [
		'WorldM_normal',
		'WorldM2',
		'WorldM3',
		'WorldM4',
		'WorldM5',
		'WorldM6',
		'WorldM_disgusted',
		'WorldM_distressed',
		'WorldM_distressed2',
		'WorldM_distressed_talk',
		'WorldM_shock',
		'WorldM_shocked',
		'WorldM_what',
		'WorldM_what2',
		'WorldM_wtf',
		'WorldM_wtf2',
		'WorldM_yawn',
		'WorldM_eyeclosed',
		'WorldM_eyeclosed_sigh',
		'WorldM_sunglasses',
		//'WorldM_popcorn',
		'WorldM_smile',
		//'WorldM_owo',
		'WorldM_83c',
		//'WorldM_owoc',
		//'WorldM_uwu',
		//'WorldM_xwx',
		//'WorldM_wink',
		//'WorldM_winkc',
		//'WorldM_winkp',
		'WorldM_derp',
		'WorldM_speak',
		'WorldM_pancakes',
		//'WorldM_surprise',
		//'WorldM_shy',
		//'WorldM_blush',
		//'WorldM_blushier',
		//'WorldM_oof',
		//'WorldM_ouch',
		//'WorldM_thinking',
		//'WorldM_fingerguns',
		'WorldM_gasmask',
		'WorldM_teary',
		'WorldM_distressed_cry',
		'WorldM_crying',
		'WorldM_wipe_tears',
		'WorldM_upset',
		'WorldM_upset_meow',
		'WorldM_upset2',
		//'WorldM_really',
	],
	Calamus: [
		'calamus',
		'calamus_heh',
		'calamus_sad',
		'calamus_shame',
		'calamus_shock',
		'calamus_smile',
		'calamus_smile2',
		'calamus_speak',
		'calamus_unknown',
	],
	Alula: [
		'alula',
		'alula_gasp',
		'alula_gasp2',
		'alula_oh',
		'alula_pout',
		'alula_speak',
	],
	Maize: [
		'maize',
		'maize_smile1',
		'maize_smile2',
		'maize_strain',
		'maize_stress',
		'maize_thisisfine',
	],
	George: {
		"1": [
			'george1',
			'george1_hm',
			'george1_smile',
			'george1_smug',
		],
		"2": [
			'george2',
			'george2_grr',
			'george2_NO',
			'george2_sigh',
			'george2_stress',
		],
		"3": [
			'george3',
			'george3_cry',
			'george3_sad',
			'george3_sigh',
			'george3_worry',
		],
		"4": [
			'george4',
			'george4_golly',
			'george4_omg',
			'george4_oops',
			'george4_smile',
		],
		"5": [
			'george5',
			'george5_aww',
			'george5_heh',
			'george5_hmm',
			'george5_sad',
			'george5_sigh',
			'george5_smile',
		],
		"6": [
			'george6',
			'george6_fingerguns',
			'george6_point',
			'george6_shrug',
			'george6_smile',
		]
	},
	Silver: [
		"silver",
		"silver2",
		"silver3",
		"silver_eyeclosed",
		"silver_falling",
		"silver_GETOUT",
		"silver_lookup",
		"silver_rip",
		"silver_rip0",
		"silver_rip2",
		"silver_square1",
		"silver_square2",
		"silver_worry",
	],
	Prototype: [
		'proto1',
		'proto1b',
		'proto1c',
		'proto2',
		'proto2b',
		'proto_disk',
		'proto_eyeclosed',
		'proto_gasp1',
		'proto_gasp2',
		'proto_jealous',
	],
	Cedric: [
		'cedric',
		'cedric_eek',
		'cedric_hmm',
		'cedric_sigh',
		'cedric_sigh2',
		'cedric_smile',
		'cedric_talk',
		'cedric_upset',
	],
	Rue: [
		"rue",
		"rue_dark",
		"rue_oh",
		"rue_sad",
		"rue_sigh",
		"rue_smile",
		"rue_talk",
		"rue_ttt",
	],
	LampLighter: [
		'plight',
		'plight_2',
		'plight_2b',
		'plight3',
		'plight_scared',
		'plight_shock',
		'plight_sigh',
		'plight_unknown',
		'plight_why',
		'plight_worry',
		'plight_worry2',
		'plight_wtf',
	],
	Ling: [
		"ling",
		"ling2",
		"ling3",
		"ling_hm",
		"ling_hm2",
		"ling_oh",
		"ling_shock",
		"ling_sigh",
		"ling_smile",
	],
	Kip: [
		'kip',
		'kip2',
		'kip_heh',
		'kip_huh',
		'kip_pout',
		'kip_sad',
		'kip_sigh',
		'kip_wink',
		'kip_worry',
	],
	Misc: {
		Robots: {
			RowBot: [
				'rowbot',
				'rowbot_off',
			],
			GateKeepers: [
				'blue_gatekeeper',
				'green_gatekeeper',
				'red_gatekeeper',
			],
			Kelvin: [
				'kelvin',
			],
		},
		ClockDude: [
			'watcher',
		],
		Mason: [
			'mason',
		],
		Shepherd: [
			"shepherd"
		],
		Other: [
			'rqst_other_sonicastle',
			'rqst_other_fnfxtf2',
			"af",
			"average_redditor",
			"john-athan_AHHA",
			"missing",
		],
	}
};