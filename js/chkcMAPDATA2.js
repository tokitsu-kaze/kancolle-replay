var MAPDATA = {
	20: {
		name: 'Classic',
		date: '2018-08-15',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/yiKOFFm.png',
		bannerImgAlt: 'http://i.imgur.com/yiKOFFm.png',
		allowLBAS: true,
		unlockDefault: 32,
		maps: {
			1: {
				name: '1-1',
				nameT: 'Sea in Front of the Naval Base',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 2,
				bgmNB: 2,
				bossnode: 3,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 3,
						x: 128,
						y: 142,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 248,
						y: 172,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'B': .5, 'C': .5 }
					},
					'B': {
						type: 1,
						x: 373,
						y: 90,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'C': {
						type: 1,
						x: 352,
						y: 246,
						compDiff: {
							2: [1,2,3,4]
						},
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: '1-2',
				nameT: 'Sea around the Nansei Islands',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 2,
				bgmNB: 2,
				bossnode: 2,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 128,
						y: 141,
						routeR: { 'A': .5, 'C': .5 }
					},
					'A': {
						type: 1,
						x: 332,
						y: 122,
						compDiff: {
							2: [1,2,3]
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 486,
						y: 94,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'C': {
						type: 2,
						x: 283,
						y: 232,
						resource: 2,
						amount: [10,15,20],
						route: 'D'
					},
					'D': {
						type: 1,
						x: 401,
						y: 309,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
				}
			},
			3: {
				name: '1-3',
				nameT: 'Coastal Refinery Zone',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 117,
				bgmNB: 117,
				bossnode: 7,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 128,
						y: 142,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 1,
						x: 292,
						y: 88,
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'B': {
						type: 4,
						x: 237,
						y: 241,
						resource: 2,
						loseMax: .2,
						routeR: { 'C': .3, 'E': .7 }
					},
					'C': {
						type: 2,
						x: 398,
						y: 225,
						resource: 1,
						amount: [10,15,30],
						route: 'F'
					},
					'D': {
						type: 2,
						x: 484,
						y: 162,
						resource: 1,
						amount: [10,15,25,30],
						routeR: { 'G': .5, 'C': .5 }
					},
					'E': {
						type: 1,
						x: 337,
						y: 321,
						compDiff: {
							2: [1,2,3]
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 462,
						y: 335,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'G': {
						type: 1,
						x: 614,
						y: 312,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: '1-4',
				nameT: 'Hold the Line at the Nansei Islands',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 117,
				bgmNN: 2,
				bgmDB: 12,
				bgmNB: 12,
				bossnode: 6,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 128,
						y: 141,
						routeR: { 'A': .33, 'B': .33, 'G': .34 }
					},
					'A': {
						type: 1,
						x: 235,
						y: 82,
						compDiff: {
							2: [1,2,3]
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 275,
						y: 196,
						compDiff: {
							2: [1,2,3]
						},
						route: 'C'
					},
					'C': {
						type: 2,
						x: 383,
						y: 124,
						resource: 3,
						amount: [10,15,20],
						routeR: { 'D': .5, 'E': .5 }
					},
					'D': {
						type: 2,
						x: 559,
						y: 93,
						resource: 4,
						amount: [10,15,20],
						route: 'F'
					},
					'E': {
						type: 1,
						x: 500,
						y: 190,
						compDiff: {
							2: [1,2,3]
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 655,
						y: 182,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'G': {
						type: 2,
						x: 263,
						y: 261,
						resource: 2,
						amount: [10,15,20],
						route: 'H'
					},
					'H': {
						type: 2,
						x: 393,
						y: 257,
						resource: 3,
						amount: [10,15,20],
						route: 'I'
					},
					'I': {
						type: 1,
						x: 521,
						y: 275,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'F': .3, 'J': .7 }
					},
					'J': {
						type: 1,
						x: 700,
						y: 312,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
				}
			},
			5: {
				name: '1-5',
				nameT: 'Adjacent Seas of the Naval Base',
				world: 1,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 7,
				bgmNN: 7,
				bgmDB: 37,
				bgmNB: 37,
				bossnode: 9,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 154,
						y: 156,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 312,
						y: 88,
						compDiff: {
							2: ['HQ 80+']
						},
						compHQ: {
							80: ['HQ 80+'],
							1: ['HQ 1+'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 511,
						y: 101,
						compDiff: {
							2: ['HQ 80+']
						},
						compHQ: {
							80: ['HQ 80+'],
							40: ['HQ 40+ 1','HQ 40+ 2'],
							1: ['HQ 1+'],
						},
						routeC: function(ships) {
							if (ships.total <= 4) return 'C';
							return (Math.random() < .5)? 'C' : 'D';
						}
					},
					'C': {
						type: 1,
						x: 587,
						y: 181,
						compDiff: {
							2: ['HQ 80+']
						},
						compHQ: {
							80: ['HQ 80+'],
							40: ['HQ 40+'],
							1: ['HQ 1+'],
						},
						routeC: function(ships) {
							if (ships.FBB + ships.BB) return 'F';
							if (ships.SS + ships.SSV) return 'F';
							if (ships.CL >= 3) return 'F';
							if (ships.total >= 5) return 'F';
							return 'E';
						}
					},
					'D': {
						type: 1,
						x: 453,
						y: 211,
						compDiff: {
							2: [1]
						},
						routeC: function(ships) {
							if (ships.total >= 5) return 'H';
							return (Math.random() < .5)? 'H' : 'I';
						}
					},
					'E': {
						type: 3,
						x: 530,
						y: 273,
						routeC: function(ships) {
							if (ships.CVL == 1 || ships.AV == 1 || ships.LHA == 1 || ships.CAV == 1) return 'I';
							return (Math.random() < .5)? 'G' : 'I';
						}
					},
					'F': {
						type: 1,
						x: 594,
						y: 295,
						compDiff: {
							2: [1]
						},
						end: true
					},
					'G': {
						type: 1,
						x: 486,
						y: 349,
						compDiff: {
							2: [1]
						},
						end: true
					},
					'H': {
						type: 3,
						x: 292,
						y: 215,
						end: true
					},
					'I': {
						type: 1,
						x: 292,
						y: 301,
						compDiff: {
							2: ['HQ 80+']
						},
						compHQ: {
							80: ['HQ 80+'],
							40: ['HQ 40+'],
							1: ['HQ 1+'],
						},
						end: true,
						boss: true
					},
				}
			},
			6: {
				name: '1-6',
				nameT: 'Naval Base Adjacent Sea Route',
				world: 1,
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 29,
				bgmNN: 2,
				bgmDB: 12,
				bgmNB: 12,
				bossnode: 14,
				maphp: { 2: { 1: 7 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				additionalChecks(ships,errors) {
					errors.push('COMING SOON');
				},
				nodes: {
				
				}
			},
			7: {
				name: '2-1',
				nameT: 'Cam Ranh Peninsula',
				world: 2,
				fleetTypes: [0],
				bgmMap: 14,
				bgmDN: 1,
				bgmNN: 2,
				bgmDB: 30,
				bgmNB: 30,
				bossnode: 5,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 71,
						y: 227,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 211,
						y: 318,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'B': .5, 'D': .5 }
					},
					'B': {
						type: 2,
						x: 173,
						y: 254,
						resource: 3,
						amount: [10,20,25,30],
						route: 'C'
					},
					'C': {
						type: 1,
						x: 122,
						y: 178,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'D': {
						type: 2,
						x: 244,
						y: 187,
						resource: 7,
						amount: [1],
						routeC: function(ships) {
							if (ships.CAV + ships.CV + ships.CVL + ships.aBB + ships.AV) return (Math.random() < .7)? 'E' : 'F';
							return (Math.random() < .3)? 'E' : 'F';
						}
					},
					'E': {
						type: 1,
						x: 152,
						y: 99,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'F': {
						type: 1,
						x: 342,
						y: 82,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
				}
			},
			8: {
				name: '2-2',
				nameT: 'Bashi Island',
				world: 2,
				fleetTypes: [0],
				bgmMap: 14,
				bgmDN: 8,
				bgmNN: 2,
				bgmDB: 46,
				bgmNB: 46,
				bossnode: 6,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 65,
						y: 228,
						routeR: { 'A': .5, 'E': .5 }
					},
					'A': {
						type: 1,
						x: 130,
						y: 163,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'B': .5, 'E': .5 }
					},
					'B': {
						type: 2,
						x: 259,
						y: 139,
						resource: 4,
						amount: [5,10,15],
						routeR: { 'C': .5, 'D': .5 }
					},
					'C': {
						type: 2,
						x: 185,
						y: 77,
						resource: 7,
						amount: [1],
						end: true
					},
					'D': {
						type: 1,
						x: 381,
						y: 119,
						compName: 'D/G',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'E': {
						type: 2,
						x: 189,
						y: 241,
						resource: 4,
						amount: [15,20,25,30,35],
						routeC: function(ships) {
							if (ships.CV + ships.CVL + ships.AV) return (Math.random() < .7)? 'F' : 'G';
							return (Math.random() < .3)? 'F' : 'G';
						}
					},
					'F': {
						type: 1,
						x: 381,
						y: 217,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'G': {
						type: 1,
						x: 312,
						y: 316,
						compName: 'D/G',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
				}
			},
			9: {
				name: '2-3',
				nameT: 'Eastern Orel Bay',
				world: 2,
				fleetTypes: [0],
				bgmMap: 116,
				bgmDN: 1004,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 7,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 65,
						y: 228,
						routeR: { 'A': .5, 'C': .5 }
					},
					'A': {
						type: 2,
						x: 132,
						y: 161,
						resource: 1,
						amount: [15,20,25,30,35,40,45],
						route: 'B'
					},
					'B': {
						type: 1,
						x: 269,
						y: 76,
						compName: 'B/C',
						compDiff: {
							2: [1,2,3]
						},
						route: 'E'
					},
					'C': {
						type: 1,
						x: 225,
						y: 234,
						compName: 'B/C',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVL + ships.AV) return (Math.random() < .7)? 'D' : 'H';
							return (Math.random() < .5)? 'D' : 'H';
						}
					},
					'D': {
						type: 2,
						x: 307,
						y: 175,
						resource: 2,
						amount: [20,25,30,35,40,45],
						route: 'E'
					},
					'E': {
						type: 2,
						x: 381,
						y: 175,
						resource: 1,
						amount: [15,20,25,30,35,40,45],
						routeC: function(ships) {
							if (ships.AV) return (Math.random() < .7)? 'G' : 'F';
							return (Math.random() < .5)? 'G' : 'F';
						}
					},
					'F': {
						type: 1,
						x: 438,
						y: 68,
						compName: 'F/H/K',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'G': {
						type: 1,
						x: 598,
						y: 115,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'H': {
						type: 1,
						x: 248,
						y: 332,
						compName: 'F/H/K',
						compDiff: {
							2: [1,2,3]
						},
						route: 'I'
					},
					'I': {
						type: 2,
						x: 398,
						y: 271,
						resource: 1,
						amount: [15,20,30,45],
						routeC: function(ships) {
							if (ships.CL) return (Math.random() < .7)? 'J' : 'K';
							return (Math.random() < .5)? 'J' : 'K';
						}
					},
					'J': {
						type: 2,
						x: 476,
						y: 188,
						resource: 2,
						amount: [20,25,30,35,45],
						end: true
					},
					'K': {
						type: 1,
						x: 539,
						y: 268,
						compName: 'F/H/K',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			10: {
				name: '2-4',
				nameT: 'Okinoshima Island',
				world: 2,
				fleetTypes: [0],
				bgmMap: 103,
				bgmDN: 31,
				bgmNN: 2,
				bgmDB: 4,
				bgmNB: 5,
				bossnode: 10,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 65,
						y: 228,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 227,
						y: 257,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (Math.random() < .2) return 'F';
							if (ships.CVL) return (Math.random() < .75)? 'K' : 'B';
							return (Math.random() < .5)? 'K' : 'B';
						}
					},
					'B': {
						type: 2,
						x: 144,
						y: 209,
						resource: 2,
						amount: [20,25,30,35,40,50,55,60],
						route: 'C'
					},
					'C': {
						type: 1,
						x: 167,
						y: 145,
						compName: 'C/F/L',
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 324,
						y: 108,
						compName: 'D/G/H/N/P',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CL) return (Math.random() < .7)? 'E' : 'G';
							return (Math.random() < .4)? 'E' : 'G';
						}
					},
					'E': {
						type: 2,
						x: 180,
						y: 85,
						resource: 5,
						amount: [1],
						end: true,
					},
					'F': {
						type: 1,
						x: 287,
						y: 167,
						compName: 'C/F/L',
						compDiff: {
							2: [1,2,3]
						},
						route: 'Q'
					},
					'G': {
						type: 1,
						x: 418,
						y: 141,
						compName: 'D/G/H/N/P',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CV) return (Math.random() < .9)? 'H' : 'I';
							return (Math.random() < .4)? 'H' : 'I';
						}
					},
					'Q': { //this is G when it's blue
						type: 3,
						x: 418,
						y: 141,
						routeC: function(ships) {
							if (ships.CV) return (Math.random() < .9)? 'H' : 'I';
							return (Math.random() < .4)? 'H' : 'I';
						}
					},
					'H': {
						type: 1,
						x: 537,
						y: 92,
						compName: 'D/G/H/N/P',
						compDiff: {
							2: [1,2,3]
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 515,
						y: 224,
						compName: 'I/O',
						compDiff: {
							2: [1,2,3]
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 664,
						y: 247,
						compDiff: {
							2: [1,2,3,4,5]
						},
						end: true,
						boss: true
					},
					'K': {
						type: 2,
						x: 374,
						y: 238,
						resource: 1,
						amount: [20,25,30,35,40,50,55,60],
						route: 'L'
					},
					'L': {
						type: 1,
						x: 412,
						y: 323,
						compName: 'C/F/L',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.DD) return (Math.random() < .7)? 'M' : 'O';
							return (Math.random() < .4)? 'M' : 'O';
						}
					},
					'M': {
						type: 2,
						x: 311,
						y: 322,
						resource: 6,
						amount: [1],
						route: 'N'
					},
					'N': {
						type: 1,
						x: 218,
						y: 315,
						compName: 'D/G/H/N/P',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'O': {
						type: 1,
						x: 528,
						y: 309,
						compName: 'I/O',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'J': .4, 'P': .6 }
					},
					'P': {
						type: 1,
						x: 709,
						y: 312,
						compName: 'D/G/H/N/P',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			11: {
				name: '2-5',
				nameT: 'Okinoshima Sea',
				world: 2,
				fleetTypes: [0],
				bgmMap: 1003,
				bgmDN: 11,
				bgmNN: 31,
				bgmDB: 27,
				bgmNB: 1002,
				bossnode: 12,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 145,
						y: 248,
						routeC: function(ships) {
							if (ships.aCV) return 'B';
							if (ships.AV >= 2) return 'B';
							if (ships.DD >= 3 && ships.DD + ships.CL >= 4) return 'A';
							if (ships.SS + ships.SSV >= 4) return 'A';
							let numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrumShips++;
										break;
									}
								}
							}
							if (numDrumShips >= 2) return 'A';
							if (ships.aBB) return 'B';
							return (Math.random() < .7)? 'A' : 'B';
						}
					},
					'A': {
						type: 1,
						x: 250,
						y: 147,
						compDiff: {
							2: ['HQ100+ 1','HQ100+ 2']
						},
						compHQ: {
							100: ['HQ100+ 1','HQ100+ 2'],
							70: ['HQ70+ 1','HQ70+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'C';
							return 'D';
						}
					},
					'B': {
						type: 1,
						x: 264,
						y: 329,
						compDiff: {
							2: ['HQ90+ 1','HQ90+ 2']
						},
						compHQ: {
							90: ['HQ90+ 1','HQ90+ 2'],
							60: ['HQ60+ 1','HQ60+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'F';
							if (ships.CV + ships.CVB >= 3) return 'F';
							if (ships.CV + ships.CVB >= 2 && ships.CVL) return 'F';
							if (ships.FBB == 2 || ships.FBB == 3) return 'F';
							if (ships.BB == 2) return 'F';
							if (ships.BBV >= 2) return 'F';
							if (ships.DD >= 2 && ships.aBB <= 1 && ships.CV + ships.CVB <= 1) return 'E';
							return (Math.random() < .75)? 'E' : 'F';
						}
					},
					'C': {
						type: 3,
						x: 179,
						y: 92,
						end: true
					},
					'D': {
						type: 1,
						x: 396,
						y: 149,
						compDiff: {
							2: ['HQ90+ 1','HQ90+ 2']
						},
						compHQ: {
							90: ['HQ90+ 1','HQ90+ 2'],
							60: ['HQ60+'],
							1: ['HQ1+'],
						},
						routeC: function(ships) {
							if (ships.AV) return 'H';
							if (ships.DD >= 3 && ships.DD + ships.CL >= 4) return 'H';
							if (ships.aBB <= 0) return 'H';
							return (Math.random() < .5)? 'G' : 'H';
						}
					},
					'E': {
						type: 1,
						x: 391,
						y: 243,
						compDiff: {
							2: ['HQ80+ 1','HQ80+ 2']
						},
						compHQ: {
							80: ['HQ80+ 1','HQ80+ 2'],
							60: ['HQ60+ 1','HQ60+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'I';
							if (ships.DD >= 2 && ships.CL == 1) return 'H';
							if (ships.DD >= 2 && ships.CA == 2) return 'H';
							if (ships.DD >= 2 && ships.CAV == 2) return 'H';
							return (Math.random() < .4)? 'H' : 'I';
						}
					},
					'F': {
						type: 3,
						x: 395,
						y: 342,
						end: true
					},
					'G': {
						type: 2,
						x: 507,
						y: 109,
						resource: 1,
						amount: [50],
						end: true
					},
					'H': {
						type: 3,
						x: 519,
						y: 201,
						routeL: { 33: 'L', 31: 'J' }
					},
					'I': {
						type: 1,
						x: 520,
						y: 299,
						compDiff: {
							2: ['HQ100+']
						},
						compHQ: {
							100: ['HQ100+'],
							70: ['HQ70+'],
							50: ['HQ50+'],
							1: ['HQ1+'],
						},
						showLoSPlane: 'L',
						routeC: function(ships) {
							if (checkELoS33(getELoS33(1,1),{ 46: 'L', 37: 'X' }) == 'L') return 'L';
							return (Math.random() < .5)? 'H' : 'K';
						}
					},
					'J': {
						type: 1,
						x: 589,
						y: 126,
						compDiff: {
							2: ['HQ80+']
						},
						compHQ: {
							80: ['HQ80+'],
							50: ['HQ50+'],
							1: ['HQ1+'],
						},
						end: true
					},
					'K': {
						type: 2,
						x: 573,
						y: 320,
						resource: 3,
						amount: [50],
						end: true
					},
					'L': {
						type: 1,
						x: 641,
						y: 215,
						compDiff: {
							2: ['HQ100+']
						},
						compDiffF: {
							2: ['HQ100+ F']
						},
						compHQ: {
							100: ['HQ100+'],
							70: ['HQ70+'],
							1: ['HQ1+'],
						},
						compHQF: {
							100: ['HQ100+ F'],
							70: ['HQ70+ F'],
							1: ['HQ1+ F'],
						},
						end: true,
						boss: true
					},
				}
			},
			12: {
				name: '3-1',
				nameT: 'The Moray Sea',
				world: 3,
				fleetTypes: [0],
				bgmMap: 2038,
				bgmDN: 19,
				bgmNN: 19,
				bgmDB: 2,
				bgmNB: 19,
				bossnode: 5,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 226,
						routeR: { 'A': .5, 'D': .5 }
					},
					'A': {
						type: 1,
						x: 156,
						y: 162,
						compName: 'A/D',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'B': .5, 'C': .5 }
					},
					'B': {
						type: 2,
						x: 162,
						y: 68,
						resource: 3,
						amount: [35,150],
						end: true
					},
					'C': {
						type: 1,
						x: 250,
						y: 141,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'D': {
						type: 1,
						x: 174,
						y: 309,
						compName: 'A/D',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'E': .45, 'F': .55 }
					},
					'E': {
						type: 1,
						x: 265,
						y: 206,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'F': {
						type: 1,
						x: 294,
						y: 308,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
				}
			},
			13: {
				name: '3-2',
				nameT: 'The Kis Island',
				world: 3,
				fleetTypes: [0],
				bgmMap: 2038,
				bgmDN: 29,
				bgmNN: 2,
				bgmDB: 11,
				bgmNB: 11,
				bossnode: 8,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 226,
						routeC: function(ships) {
							if (ships.total > ships.DD + ships.CL) return 'A';
							if (ships.CL >= 2) return 'A';
							if (ships.CL && SHIPDATA[ships.ids[0]].type != 'CL') return 'A';
							return (Math.random() < .5)? 'D' : 'E';
						}
					},
					'A': {
						type: 1,
						x: 119,
						y: 134,
						compName: 'A/E',
						compDiff: {
							2: [1,2,3]
						},
						route: 'B'
					},
					'B': {
						type: 2,
						x: 206,
						y: 85,
						resource: 3,
						amount: [50,100,150],
						route: 'C'
					},
					'C': {
						type: 1,
						x: 325,
						y: 83,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'D': {
						type: 4,
						x: 205,
						y: 197,
						resource: 1,
						routeR: { 'B': .5, 'F': .5 }
					},
					'E': {
						type: 1,
						x: 182,
						y: 297,
						compName: 'A/E',
						compDiff: {
							2: [1,2,3]
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 283,
						y: 301,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'G': .4, 'H': .6 }
					},
					'G': {
						type: 2,
						x: 375,
						y: 163,
						resource: 8,
						amount: [1],
						end: true
					},
					'H': {
						type: 1,
						x: 409,
						y: 253,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					}
				}
			},
			14: {
				name: '3-3',
				nameT: 'The Alfonsinos',
				world: 3,
				fleetTypes: [0],
				bgmMap: 2038,
				bgmDN: 11,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 7,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 226,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 182,
						y: 297,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.aCV <= 1) return 'B';
							return (Math.random() < .5)? 'E' : 'H';
						}
					},
					'B': {
						type: 4,
						x: 223,
						y: 203,
						resource: 1,
						route: 'C'
					},
					'C': {
						type: 1,
						x: 386,
						y: 132,
						compName: 'C/E',
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 484,
						y: 113,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'E': {
						type: 1,
						x: 307,
						y: 261,
						compName: 'C/E',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'F': .5, 'I': .5 }
					},
					'F': {
						type: 4,
						x: 464,
						y: 163,
						route: 'G'
					},
					'G': {
						type: 1,
						x: 589,
						y: 161,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'H': {
						type: 4,
						x: 336,
						y: 315,
						resource: 2,
						route: 'I'
					},
					'I': {
						type: 1,
						x: 486,
						y: 259,
						compDiff: {
							2: [1,2]
						},
						routeR: { 'G': .34, 'J': .33, 'K': .33 }
					},
					'J': {
						type: 2,
						x: 628,
						y: 245,
						resource: 9,
						amount: [1],
						end: true
					},
					'K': {
						type: 2,
						x: 615,
						y: 316,
						resource: 10,
						amount: [1],
						end: true
					},
				}
			},
			15: {
				name: '3-4',
				nameT: 'Throughout the Northern Sea',
				world: 3,
				fleetTypes: [0],
				bgmMap: 2038,
				bgmDN: 8,
				bgmNN: 4,
				bgmDB: 4,
				bgmNB: 5,
				bossnode: 5,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 85,
						y: 226,
						routeR: { 'A': .34, 'J': .33, 'K': .33 }
					},
					'A': {
						type: 1,
						x: 144,
						y: 119,
						compName: 'A/J',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'B': .5, 'F': .5 }
					},
					'B': {
						type: 1,
						x: 318,
						y: 64,
						compName: 'B/F/L',
						compDiff: {
							2: [1,2,3]
						},
						route: 'C'
					},
					'C': {
						type: 4,
						x: 439,
						y: 100,
						resource: 2,
						routeR: { 'D': .5, 'H': .5 }
					},
					'D': {
						type: 1,
						x: 532,
						y: 62,
						compName: 'D/I/N',
						compDiff: {
							2: [1,2,3]
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 619,
						y: 107,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'F': {
						type: 1,
						x: 271,
						y: 131,
						compName: 'B/F/L',
						compDiff: {
							2: [1,2,3]
						},
						route: 'G'
					},
					'G': {
						type: 2,
						x: 394,
						y: 177,
						resource: 4,
						amount: [50,100,150],
						route: 'H'
					},
					'H': {
						type: 1,
						x: 523,
						y: 192,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'E': .5, 'I': .5 }
					},
					'I': {
						type: 1,
						x: 621,
						y: 205,
						compName: 'D/I/N',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'J': {
						type: 1,
						x: 234,
						y: 226,
						compName: 'A/J',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'F': .5, 'L': .5 }
					},
					'K': {
						type: 4,
						x: 212,
						y: 308,
						resource: 1,
						route: 'L'
					},
					'L': {
						type: 1,
						x: 365,
						y: 308,
						compName: 'B/F/L',
						compDiff: {
							2: [1,2,3]
						},
						route: 'M'
					},
					'M': {
						type: 2,
						x: 491,
						y: 314,
						resource: 9,
						amount: [1],
						routeR: { 'H': .5, 'N': .5 }
					},
					'N': {
						type: 1,
						x: 592,
						y: 295,
						compName: 'D/I/N',
						compDiff: {
							2: [1,2,3]
						},
						route: 'O'
					},
					'O': {
						type: 2,
						x: 703,
						y: 248,
						resource: 10,
						amount: [1],
						end: true
					}
				}
			},
			16: {
				name: '3-5',
				nameT: 'Northern AL Waters',
				world: 3,
				fleetTypes: [0],
				bgmMap: 2033,
				bgmDN: 19,
				bgmNN: 3,
				bgmDB: 13,
				bgmNB: 6,
				bossnode: 11,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 160,
						y: 316,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'A';
							if (ships.aBB >= 2) return 'A';
							if (ships.aBB + ships.CA + ships.CAV >= 3) return 'A';
							if (ships.aCV) return 'A';
							if (ships.CLT) return 'A';
							if (ships.DD >= 5) return 'B';
							if (ships.DD == 4) return (Math.random() < .75)? 'B' : 'A';
							return (Math.random() < .5)? 'B' : 'A';
						}
					},
					'A': {
						type: 1,
						x: 219,
						y: 150,
						compDiff: {
							2: ['HQ100+','HQAll 1','HQAll 2']
						},
						compHQ: {
							100: ['HQ100+','HQAll 1','HQAll 2'],
							1: ['HQ1+','HQAll 1','HQAll 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 4) return 'H';
							if (ships.aCV >= 4) return 'H';
							if (ships.aCV + ships.aBB >= 5) return 'H';
							if (ships.CLT >= 2) return 'C';
							if (ships.aCV >= 2) return 'C';
							if (ships.aBB >= 3) return 'C';
							if (ships.DD >= 2 && ships.CL == 1 && ships.CV + ships.CVB <= 0) return 'E';
							if (ships.CA + ships.CAV >= 2) return 'C';
							return 'D';
						}
					},
					'B': {
						type: 1,
						x: 430,
						y: 308,
						compDiff: {
							2: ['HQ85+','HQAll']
						},
						compDiffF: {
							2: ['HQ85+ F']
						},
						compDiffC: {
							2: ['HQ85+ F']
						},
						compHQ: {
							85: ['HQ85+','HQAll'],
							1: ['HQ1+','HQAll'],
						},
						compHQF: {
							85: ['HQ85+ F'],
							1: ['HQAll'],
						},
						compHQC: {
							85: ['HQ85+ F'],
							1: ['HQAll'],
						},
						routeC: function(ships) {
							if (ships.aCV + ships.aBB + ships.LHA) return 'E';
							if (ships.CL <= 2) return 'G';
							return (Math.random() < .75)? 'G' : 'E';
						}
					},
					'C': {
						type: 1,
						x: 370,
						y: 92,
						compDiff: {
							2: ['HQ90+ 1','HQ90+ 2','HQAll']
						},
						compHQ: {
							90: ['HQ90+ 1','HQ90+ 2','HQAll'],
							1: ['HQ1+ 1','HQ1+ 2','HQAll'],
						},
						route: 'F'
					},
					'D': {
						type: 3,
						x: 315,
						y: 271,
						route: 'B'
					},
					'E': {
						type: 1,
						x: 401,
						y: 202,
						compDiff: {
							2: ['HQ85+','HQAll']
						},
						compDiffF: {
							2: ['HQ85+ F']
						},
						compDiffC: {
							2: ['HQ85+ F']
						},
						compHQ: {
							85: ['HQ85+','HQAll'],
							1: ['HQAll'],
						},
						compHQF: {
							85: ['HQ85+ F'],
							1: ['HQ1+ F'],
						},
						compHQC: {
							85: ['HQ85+ F'],
							1: ['HQ1+ F'],
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 540,
						y: 116,
						compDiff: {
							2: ['HQ85+ 1','HQ85+ 2']
						},
						compDiffF: {
							2: ['HQ85+ F']
						},
						compDiffC: {
							2: ['HQ85+ F']
						},
						compHQ: {
							85: ['HQ85+ 1','HQ85+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						compHQF: {
							85: ['HQ85+ F'],
							1: ['HQ1+ F'],
						},
						compHQC: {
							85: ['HQ85+ F'],
							1: ['HQ1+ F'],
						},
						routeC: function(ships) {
							if ((ships.LHA && ships.aBB + ships.aCV >= 2) || ships.aBB + ships.aCV >= 4) {
								this.showLoSPlane = null;
								return 'I';
							}
							this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1,4),{ 40: 'K', 35: 'I' });
						}
					},
					'G': {
						type: 1,
						x: 524,
						y: 234,
						compDiff: {
							2: ['HQ100+ 1','HQ100+ 2']
						},
						compDiffF: {
							2: ['HQ100+ F']
						},
						compDiffC: {
							2: ['HQ100+ F']
						},
						compHQ: {
							100: ['HQ100+ 1','HQ100+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						compHQF: {
							100: ['HQ100+ F'],
							1: ['HQ1+ F'],
						},
						compHQC: {
							100: ['HQ100+ F'],
							1: ['HQ1+ F'],
						},
						routeLC: 4,
						routeL: { 28: 'K', 23: 'J' }
					},
					'H': {
						type: 3,
						x: 113,
						y: 163,
						end: true
					},
					'I': {
						type: 2,
						x: 621,
						y: 62,
						resource: 2,
						amount: [50],
						end: true
					},
					'J': {
						type: 3,
						x: 619,
						y: 252,
						end: true
					},
					'K': {
						type: 1,
						x: 643,
						y: 150,
						compDiff: {
							2: ['HQ90+','HQAll']
						},
						compDiffF: {
							2: ['HQ90+ F']
						},
						compDiffC: {
							2: ['HQ90+ F']
						},
						compHQ: {
							90: ['HQ90+','HQAll'],
							1: ['HQ1+','HQAll'],
						},
						compHQF: {
							90: ['HQ90+ F'],
							1: ['HQ1+ F'],
						},
						compHQC: {
							90: ['HQ90+ F'],
							1: ['HQ1+ F'],
						},
						end: true,
						boss: true
					}
				}
			},
			17: {
				name: '4-1',
				nameT: 'Battle of Jam Island',
				world: 4,
				fleetTypes: [0],
				bgmMap: 95,
				bgmDN: 1004,
				bgmNN: 2,
				bgmDB: 8,
				bgmNB: 8,
				bossnode: 4,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 662,
						y: 107,
						routeR: { 'A': .5, 'E': .5 }
					},
					'A': {
						type: 1,
						x: 488,
						y: 97,
						compDiff: {
							2: [1,2,3]
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 283,
						y: 97,
						subonly: true,
						compName: 'B/G/H',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'C': .5, 'D': .5 }
					},
					'C': {
						type: 1,
						x: 96,
						y: 109,
						compName: 'C/I',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'D': {
						type: 1,
						x: 121,
						y: 254,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'E': {
						type: 1,
						x: 559,
						y: 246,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.DD >= 2) return 'F';
							return (Math.random() < .5)? 'F' : 'H';
						}
					},
					'F': {
						type: 2,
						x: 397,
						y: 174,
						resource: 1,
						amount: [40,80,120],
						routeR: { 'G': .5, 'I': .5 }
					},
					'G': {
						type: 1,
						x: 258,
						y: 230,
						subonly: true,
						compName: 'B/G/H',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'D': .5, 'I': .5 }
					},
					'H': {
						type: 1,
						x: 456,
						y: 318,
						subonly: true,
						compName: 'B/G/H',
						compDiff: {
							2: [1,2,3]
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 313,
						y: 333,
						compName: 'C/I',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			18: {
				name: '4-2',
				nameT: 'Curry Ocean Pacification',
				world: 4,
				fleetTypes: [0],
				bgmMap: 95,
				bgmDN: 30,
				bgmNN: 2,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 4,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 629,
						y: 231,
						routeR: { 'A': .5, 'F': .5 }
					},
					'A': {
						type: 1,
						x: 523,
						y: 179,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.DD >= 2) return 'E';
							return (Math.random() < .5)? 'B' : 'E';
						}
					},
					'B': {
						type: 4,
						x: 462,
						y: 103,
						resource: 1,
						lostMax: .2,
						route: 'C'
					},
					'C': {
						type: 1,
						x: 305,
						y: 99,
						subonly: true,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'D': .5, 'H': .5 }
					},
					'D': {
						type: 1,
						x: 112,
						y: 159,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'E': {
						type: 2,
						x: 352,
						y: 200,
						resource: 3,
						amount: [40,80,120],
						route: 'H'
					},
					'F': {
						type: 1,
						x: 527,
						y: 292,
						subonly: true,
						compName: 'C/F',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'E': .5, 'G': .5 }
					},
					'G': {
						type: 2,
						x: 383,
						y: 334,
						resource: 3,
						amount: [20,40,60],
						route: 'H'
					},
					'H': {
						type: 1,
						x: 235,
						y: 235,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'D': .5, 'I': .5 }
					},
					'I': {
						type: 1,
						x: 167,
						y: 331,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			19: {
				name: '4-3',
				nameT: 'Bombing of Ri Lanka',
				world: 4,
				fleetTypes: [0],
				bgmMap: 95,
				bgmDN: 39,
				bgmNN: 2,
				bgmDB: 10,
				bgmNB: 10,
				bossnode: 9,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 686,
						y: 94,
						routeC: function(ships) {
							if (ships.DD >= 2) return 'A';
							return (Math.random() < .5)? 'F' : 'J';
						}
					},
					'A': {
						type: 1,
						x: 595,
						y: 58,
						compName: 'A/J',
						compDiff: {
							2: [1,2,3]
						},
						route: 'B'
					},
					'B': {
						type: 2,
						x: 533,
						y: 115,
						resource: 1,
						amount: [30,60,90],
						routeC: function(ships) {
							if (ships.AV + ships.CAV) return 'D';
							return (Math.random() < .5)? 'C' : 'F';
						}
					},
					'C': {
						type: 4,
						x: 452,
						y: 60,
						resource: 2,
						route: 'D'
					},
					'D': {
						type: 1,
						x: 384,
						y: 107,
						subonly: true,
						compName: 'D/F/K',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'E': .5, 'G': .5 }
					},
					'E': {
						type: 2,
						x: 225,
						y: 64,
						resource: 4,
						amount: [50,100,150],
						end: true
					},
					'F': {
						type: 1,
						x: 530,
						y: 262,
						subonly: true,
						compName: 'D/F/K',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CA >= 2) return 'G';
							return (Math.random() < .5)? 'D' : 'K';
						}
					},
					'G': {
						type: 1,
						x: 350,
						y: 265,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'H': .33, 'I': .34, 'L': .33 }
					},
					'H': {
						type: 1,
						x: 293,
						y: 178,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'I': {
						type: 1,
						x: 226,
						y: 282,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'J': {
						type: 1,
						x: 640,
						y: 282,
						compName: 'A/J',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CAV + ships.AV) return 'K';
							return 'F';
						}
					},
					'K': {
						type: 1,
						x: 528,
						y: 351,
						subonly: true,
						compName: 'D/F/K',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'G': .5, 'L': .5 }
					},
					'L': {
						type: 4,
						x: 255,
						y: 351,
						resource: 1,
						route: 'M'
					},
					'M': {
						type: 1,
						x: 84,
						y: 270,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			20: {
				name: '4-4',
				nameT: 'Battle of Casgadama',
				world: 4,
				fleetTypes: [0],
				bgmMap: 98,
				bgmDN: 12,
				bgmNN: 4,
				bgmDB: 44,
				bgmNB: 44,
				bossnode: 8,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 699,
						y: 102,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 625,
						y: 195,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.DD >= 2) return 'F';
							return (Math.random() < .5)? 'B' : 'I';
						}
					},
					'B': {
						type: 4,
						x: 503,
						y: 116,
						resource: 2,
						route: 'C'
					},
					'C': {
						type: 1,
						x: 368,
						y: 169,
						compName: 'C/J',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'D': .3, 'E': .3, 'G': .4 }
					},
					'D': {
						type: 2,
						x: 334,
						y: 112,
						resource: 1,
						amount: [50,100,150],
						end: true
					},
					'E': {
						type: 2,
						x: 190,
						y: 168,
						resource: 3,
						amount: [35,70,105],
						end: true
					},
					'F': {
						type: 1,
						x: 474,
						y: 208,
						subonly: true,
						compName: 'F/I',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CA + ships.CAV) return 'G';
							return 'C';
						}
					},
					'G': {
						type: 1,
						x: 349,
						y: 232,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'H': .7, 'J': .3 }
					},
					'H': {
						type: 1,
						x: 203,
						y: 254,
						compDiff: {
							2: ['Pre-F']
						},
						compDiffF: {
							2: ['F']
						},
						compDiffC: {
							2: ['Pre-F','F','Post-F']
						},
						end: true,
						boss: true
					},
					'I': {
						type: 1,
						x: 527,
						y: 300,
						subonly: true,
						compName: 'F/I',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'G': .5, 'J': .5 }
					},
					'J': {
						type: 1,
						x: 373,
						y: 341,
						compName: 'C/J',
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			21: {
				name: '4-5',
				nameT: 'Curry Ocean Ri-Lanka Island',
				world: 4,
				fleetTypes: [0],
				bgmMap: 98,
				bgmDN: 1003,
				bgmNN: 40,
				bgmDB: 40,
				bgmNB: 41,
				bossnode: 13,
				bossHP: 5,
				maphp: { 2: { 1: 5 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 636,
						y: 228,
						routeC: function(ships) {
							if (ships.CL >= 1 && ships.DD >= 2 && ships.aBB + ships.CLT + ships.CV + ships.CVB + ships.AR + ships.SS + ships.SSV <= 2) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 550,
						y: 120,
						routeS: ['C','D']
					},
					'B': {
						type: 3,
						x: 529,
						y: 281,
						routeS: ['C','E']
					},
					'C': {
						type: 1,
						x: 460,
						y: 191,
						compDiff: {
							2: [1,2,3,4]
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 453,
						y: 77,
						compDiff: {
							2: [1,2,3]
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 438,
						y: 319,
						compDiff: {
							2: [1,2,3,4]
						},
						route: 'H'
					},
					'F': {
						type: 1,
						x: 378,
						y: 212,
						subonly: true,
						compDiff: {
							2: [1,2,3,4,5]
						},
						routeC: function(ships) {
							if (ships.aBB + ships.aCV <= 3) return 'J';
							if (ships.DD && ships.DD + ships.AV >= 2) return 'J';
							return 'H';
						}
					},
					'G': {
						type: 3,
						x: 348,
						y: 97,
						routeS: ['F','I']
					},
					'H': {
						type: 1,
						x: 338,
						y: 307,
						compDiff: {
							2: [1,2,3,4,5]
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 2) {
								this.showLoSPlane = null;
								return 'K';
							}
							this.showLoSPlane = 'M';
							return checkELoS33(getELoS33(1,3),{ 43: 'M', 40: 'K' });
						}
					},
					'I': {
						type: 1,
						x: 270,
						y: 154,
						compDiff: {
							2: [1,2,3,4]
						},
						routeC: function(ships) {
							if (ships.aBB >= 2) return 'F';
							if (ships.aCV >= 3) return 'F';
							return 'J';
						}
					},
					'J': {
						type: 1,
						x: 264,
						y: 275,
						compDiff: {
							2: [1,2,3,4]
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) {
								this.showLoSPlane = null;
								return 'L';
							}
							this.showLoSPlane = 'M';
							return checkELoS33(getELoS33(1,3),{ 43: 'M', 40: 'L' });
						}
					},
					'K': {
						type: 3,
						x: 250,
						y: 342,
						end: true
					},
					'L': {
						type: 3,
						x: 210,
						y: 191,
						end: true
					},
					'M': {
						type: 1,
						x: 155,
						y: 311,
						compDiff: {
							2: ['Pre-F 1','Pre-F 2','Pre-F 3'],
						},
						compDiffF: {
							2: ['F 1','F 2'],
						},
						compDiffC: {
							2: ['Post-F 1','Post-F 2'],
						},
						end: true,
						boss: true
					}
				}
			},
			22: {
				name: '5-1',
				nameT: 'The Forefront of the Southern Sea',
				world: 5,
				fleetTypes: [0],
				bgmMap: 2031,
				bgmDN: 13,
				bgmNN: 2,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 9,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				nodes: {
					'Start': {
						type: 0,
						x: 92,
						y: 91,
						routeC: function(ships) {
							if (ships.CA + ships.CAV >= 2) return 'A';
							return (Math.random() < .75)? 'B' : 'A';
						}
					},
					'A': {
						type: 1,
						x: 229,
						y: 170,
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'C': .5, 'F': .5 }
					},
					'B': {
						type: 4,
						x: 92,
						y: 231,
						resource: 1,
						route: 'D'
					},
					'C': {
						type: 2,
						x: 399,
						y: 125,
						resource: 3,
						amount: [25,50,75],
						routeC: function(ships) {
							if (ships.DD >= 2) return 'H';
							return (Math.random() < .75)? 'E' : 'H';
						}
					},
					'D': {
						type: 1,
						x: 260,
						y: 344,
						subonly: true,
						compDiff: {
							2: [1,2,3]
						},
						route: 'F'
					},
					'E': {
						type: 1,
						x: 549,
						y: 132,
						compDiff: {
							2: [1,2,3]
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 421,
						y: 277,
						compDiff: {
							2: [1,2,3]
						},
						route: 'H'
					},
					'G': {
						type: 2,
						x: 652,
						y: 81,
						resource: 1,
						amount: [40,80,120],
						end: true
					},
					'H': {
						type: 1,
						x: 552,
						y: 253,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CA + ships.CAV >= 2) return 'I';
							return (Math.random() < .8)? 'E' : 'I';
						}
					},
					'I': {
						type: 1,
						x: 605,
						y: 345,
						compDiff: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					}
				}
			},
			23: {
				name: '5-2',
				nameT: 'The Coral Islands',
				world: 5,
				fleetTypes: [0],
				bgmMap: 2031,
				bgmDN: 12,
				bgmNN: 12,
				bgmDB: 10,
				bgmNB: 10,
				bossnode: 4,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 126,
						y: 270,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 232,
						y: 237,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB == 2 && ships.CVL == 1) return 'B';
							return (Math.random() < .75)? 'F' : 'B';
						}
					},
					'B': {
						type: 1,
						x: 281,
						y: 112,
						subonly: true,
						compName: 'B/F',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'C': .5, 'G': .5 }
					},
					'C': {
						type: 1,
						x: 461,
						y: 71,
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 605,
						y: 67,
						compDiff: {
							2: [1]
						},
						compDiffF: {
							2: [2]
						},
						compDiffC: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					},
					'E': {
						type: 2,
						x: 437,
						y: 156,
						resource: 2,
						amount: [25,50,75],
						route: 'D'
					},
					'F': {
						type: 1,
						x: 325,
						y: 333,
						subonly: true,
						compName: 'B/F',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'G': .5, 'I': .5 }
					},
					'G': {
						type: 1,
						x: 419,
						y: 252,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 2) return 'E';
							return (Math.random() < .8)? 'H' : 'E';
						}
					},
					'H': {
						type: 2,
						x: 567,
						y: 255,
						resource: 4,
						amount: [40,70,105],
						route: 'J'
					},
					'I': {
						type: 1,
						x: 488,
						y: 345,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.CAV) return 'H';
							return (Math.random() < .8)? 'J' : 'H';
						}
					},
					'J': {
						type: 1,
						x: 640,
						y: 337,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					}
				}
			},
			24: {
				name: '5-3',
				nameT: 'Sav Island',
				world: 5,
				fleetTypes: [0],
				bgmMap: 2031,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 52,
				bgmNB: 54,
				bossnode: 11,
				bossHP: 5,
				maphp: { 2: { 1: 5 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 107,
						y: 106,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 245,
						y: 90,
						routeC: function(ships) {
							if (ships.speed >= 10) return 'C';
							return (Math.random() < .8)? 'B' : 'C';
						}
					},
					'B': {
						type: 1,
						x: 343,
						y: 172,
						subonly: true,
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 405,
						y: 165,
						compDiff: {
							2: [1,2,3]
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 512,
						y: 231,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.aCV) return 'E';
							if (ships.CA + ships.CAV >= 2 && ships.CL >= 1) return 'F';
							if (Math.random() < .6) return 'I';
							return (Math.random() < .75)? 'F' : 'E';
						}
					},
					'E': {
						type: 1,
						x: 612,
						y: 174,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'F': {
						type: 1,
						x: 602,
						y: 279,
						compDiff: {
							2: [1,2,3]
						},
						route: 'G'
					},
					'G': {
						type: 2,
						x: 533,
						y: 341,
						resource: 1,
						amount: [30,60,90],
						routeR: { 'H': .5, 'I': .5 }
					},
					'H': {
						type: 2,
						x: 384,
						y: 334,
						resource: 2,
						amount: [30,60,90],
						route: 'I'
					},
					'I': {
						type: 3,
						x: 275,
						y: 291,
						routeC: function(ships) {
							if (ships.DD >= 2) return 'K';
							return (Math.random() < .75)? 'J' : 'K';
						}
					},
					'J': {
						type: 1,
						x: 188,
						y: 316,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'K': {
						type: 1,
						x: 194,
						y: 203,
						compDiff: {
							2: ['Pre-F']
						},
						compDiffF: {
							2: ['F']
						},
						compDiffC: {
							2: ['Pre-F','F','Post-F']
						},
						end: true,
						boss: true
					}
				}
			},
			25: {
				name: '5-4',
				nameT: 'Salmon Sea Area',
				world: 5,
				fleetTypes: [0],
				bgmMap: 2032,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 22,
				bgmNB: 49,
				bossnode: 15,
				bossHP: 5,
				maphp: { 2: { 1: 5 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 149,
						y: 123,
						routeC: function(ships) {
							if (ships.aCV >= 2) return 'A';
							if (ships.CLT >= 2) return 'B';
							let numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrumShips++;
										break;
									}
								}
							}
							if (numDrumShips >= 3) return 'C';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 282,
						y: 77,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.speed >= 10) return 'E';
							return (Math.random() < .95)? 'D' : 'E';
						}
					},
					'B': {
						type: 3,
						x: 219,
						y: 174,
						route: 'F'
					},
					'C': {
						type: 1,
						x: 193,
						y: 253,
						compDiff: {
							2: [1,2,3]
						},
						route: 'G'
					},
					'D': {
						type: 4,
						x: 414,
						y: 67,
						resource: 1,
						route: 'H'
					},
					'E': {
						type: 3,
						x: 399,
						y: 127,
						route: 'H'
					},
					'F': {
						type: 1,
						x: 304,
						y: 209,
						compDiff: {
							2: [1,2,3]
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 277,
						y: 299,
						compDiff: {
							2: [1,2,3]
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 545,
						y: 93,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							let numDrums = 0;
							for (let ship of FLEETS1[0].ships) {
								for (let eq of ship.equips) {
									if (eq.type == DRUM) numDrums++;
								}
							}
							if (numDrums >= 4) return 'M';
							retrun (Math.random() < .5)? 'J' : 'K';
						}
					},
					'I': {
						type: 1,
						x: 368,
						y: 234,
						compDiff: {
							2: [1,2,3]
						},
						route: 'L'
					},
					'J': {
						type: 3,
						x: 651,
						y: 179,
						end: true
					},
					'K': {
						type: 1,
						x: 618,
						y: 224,
						compDiff: {
							2: [1,2,3]
						},
						route: 'O'
					},
					'L': {
						type: 3,
						x: 451,
						y: 272,
						routeC: function(ships) {
							if (ships.CLT >= 2) return 'N';
							let numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrumShips++;
										break;
									}
								}
							}
							if (numDrumShips >= 3) return 'M';
							return 'N';
						}
					},
					'M': {
						type: 2,
						x: 524,
						y: 273,
						resource: 1,
						amount: [115],
						route: 'O'
					},
					'N': {
						type: 1,
						x: 479,
						y: 341,
						compDiff: {
							2: [1,2,3]
						},
						route: 'O'
					},
					'O': {
						type: 1,
						x: 633,
						y: 309,
						compDiff: {
							2: [1]
						},
						compDiffF: {
							2: [2]
						},
						compDiffC: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					}
				}
			},
			26: {
				name: '5-5',
				nameT: 'Northern Salmon Sea Area',
				world: 5,
				fleetTypes: [0],
				bgmMap: 2131,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 49,
				bgmNB: 50,
				bossnode: 14,
				bossHP: 5,
				maphp: { 2: { 1: 5 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				nodes: {
					'Start': {
						type: 0,
						x: 275,
						y: 89,
						routeC: function(ships) {
							let numDrums = 0, numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								let found = false;
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrums++;
										found = true;
									}
								}
								if (found) numDrumShips++;
							}
							if (numDrums >= 5 && numDrumShips >= 4) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 403,
						y: 132,
						compName: 'A/B',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'F';
							if (ships.speed >= 10) return 'D';
							if (ships.CV + ships.CVB == 2 && ships.CVL == 1) return 'D';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 209,
						y: 178,
						compName: 'A/B',
						compDiff: {
							2: [1,2,3]
						},
						route: 'K'
					},
					'C': {
						type: 1,
						x: 493,
						y: 138,
						compDiff: {
							2: [1,2,3]
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 475,
						y: 223,
						compDiff: {
							2: [1,2,3]
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 562,
						y: 196,
						compName: 'E/G',
						compDiff: {
							2: [1,2,3]
						},
						routeR: { 'N': .8, 'L': .2 }
					},
					'F': {
						type: 1,
						x: 349,
						y: 199,
						compDiff: {
							2: [1,2]
						},
						route: 'G'
					},
					'G': {
						type: 1,
						x: 444,
						y: 275,
						compName: 'E/G',
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							//random if from I, SS routing if from F
							//assume can't go B with 3 SS (non-Lui can't equip drums) 
							if (ships.SS + ships.SSV >= 4) return 'H';
							if (ships.SS + ships.SSV == 3) return 'N';
							return (Math.random() < .5)? 'H' : 'N';
						}
					},
					'H': {
						type: 1,
						x: 497,
						y: 340,
						compDiff: {
							2: [1,2,3]
						},
						end: true
					},
					'I': {
						type: 3,
						x: 409,
						y: 336,
						routeC: function(ships) {
							if (ships.speed <= 5) return (Math.random() < .75)? 'H' : 'G';
							return (Math.random() < .5)? 'H' : 'G';
						}
					},
					'J': {
						type: 2,
						x: 319,
						y: 313,
						resource: 2,
						amount: [110],
						route: 'I'
					},
					'K': {
						type: 1,
						x: 240,
						y: 266,
						compDiff: {
							2: [1,2,3]
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 2) return 'M';
							return (Math.random() < .5)? 'J' : 'M';
						}
					},
					'L': {
						type: 3,
						x: 645,
						y: 213,
						end: true
					},
					'M': {
						type: 1,
						x: 126,
						y: 243,
						compDiff: {
							2: [1,2]
						},
						end: true
					},
					'N': {
						type: 1,
						x: 604,
						y: 305,
						compDiff: {
							2: [1]
						},
						compDiffF: {
							2: [2]
						},
						compDiffC: {
							2: [1,2,3]
						},
						end: true,
						boss: true
					}
				}
			},
			27: {
				name: '6-1',
				nameT: 'Central Waters Patrol Line',
				world: 6,
				fleetTypes: [0],
				bgmMap: 2032,
				bgmDN: 20,
				bgmNN: 20,
				bgmDB: 6,
				bgmNB: 6,
				bossnode: 11,
				maphp: { 2: { 1: 1 } },
				finalhp: { 2: 1 },
				hpmode: -1,
				additionalChecks(ships,errors) {
					errors.push('COMING SOON');
				},
				nodes: {
				
				}
			},
			28: {
				name: '6-2',
				nameT: 'MS Archipelago',
				world: 6,
				fleetTypes: [0],
				bgmMap: 2032,
				bgmDN: 70,
				bgmNN: 9,
				bgmDB: 73,
				bgmNB: 73,
				bossnode: 11,
				bossHP: 3,
				maphp: { 2: { 1: 3 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				additionalChecks(ships,errors) {
					errors.push('COMING SOON');
				},
				nodes: {
				
				}
			},
			29: {
				name: '6-3',
				nameT: 'Guano Atoll Sea',
				world: 6,
				fleetTypes: [0],
				bgmMap: 2034,
				bgmDN: 8,
				bgmNN: 3,
				bgmDB: 4,
				bgmNB: 5,
				bossnode: 10,
				bossHP: 4,
				maphp: { 2: { 1: 4 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				additionalChecks(ships,errors) {
					errors.push('COMING SOON');
				},
				// additionalChecks: function(ships,errors) {
					// if (ships.total > ships.DD + ships.CL + ships.CT + ships.AV) errors.push('Only DD/CL/CT/AV allowed');
					// if (ships.DD <= 0) errors.push('Must have 1+ DD');
					// if (ships.CL + ships.CT <= 0) errors.push('Must have 1+ CL/CT');
					// if (ships.AV <= 0) errors.push('Must have 1+ AV');
				// },
				nodes: {
				
				}
			},
			30: {
				name: '6-4',
				nameT: 'Central Northern Offshore Sea of Peacock Island',
				world: 6,
				fleetTypes: [0],
				bgmMap: 2130,
				bgmDN: 38,
				bgmNN: 4,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 14,
				bossHP: 5,
				maphp: { 2: { 1: 5 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				lbas: 1,
				additionalChecks(ships,errors) {
					errors.push('COMING SOON');
				},
				nodes: {
				
				}
			},
			31: {
				name: '6-5',
				nameT: 'KW Atoll Sea',
				world: 6,
				fleetTypes: [0],
				bgmMap: 1005,
				bgmDN: 75,
				bgmNN: 75,
				bgmDB: 68,
				bgmNB: 68,
				bossnode: 13,
				bossHP: 6,
				maphp: { 2: { 1: 6 } },
				finalhp: { 2: 1 },
				hpmode: 1,
				lbas: 2,
				additionalChecks(ships,errors) {
					errors.push('COMING SOON');
				},
				nodes: {
				
				}
			}
		},
	},
	22: {
		name: 'Spring 2013',
		date: '2013-05-17',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/yl66bLe.png',
		bannerImgAlt: 'http://i.imgur.com/qEAfodg.png',
		noForceFlagRetreat: true,
		overrideStats: {
			1530: { HP: 24 },
			1531: { HP: 30 },
			1532: { HP: 33 },
			1533: { HP: 39 },
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Preliminary Encounter',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 1,
				bgmNN: 1000,
				bgmDB: 1000,
				bgmNB: 1000,
				bossnode: 6,
				hpmode: 2,
				maphp: {
					2: { 1: 420 },
				},
				finalhp: {
					2: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 74,
						y: 167,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 161,
						y: 149,
						compDiff: {
							2: ['1','1b','2'],
						},
						route: 'B',
					},
					'B': {
						type: 4,
						x: 257,
						y: 137,
						resource: 2,
						route: 'C',
					},
					'C': {
						type: 2,
						x: 330,
						y: 131,
						resource: 1,
						amount: [20,25,30,40,45,60],
						route: 'D',
					},
					'D': {
						type: 1,
						x: 427,
						y: 132,
						subonly: true,
						compDiff: {
							2: ['1','1b','2'],
						},
						route: 'E',
					},
					'E': {
						type: 1,
						x: 521,
						y: 152,
						compDiff: {
							2: ['1','2','2b','3'],
						},
						routeC: function(ships) {
							if (ships.AV && ships.DD >= 2 && ships.total >= 6) return 'F';
							return 'G';
						}
					},
					'F': {
						type: 1,
						x: 668,
						y: 179,
						boss: true,
						compDiff: {
							2: ['1','1b','2'],
						},
						end: true,
					},
					'G': {
						type: 2,
						x: 462,
						y: 277,
						resource: 1,
						amount: [80,150,195,240],
						end: true,
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Cordon Breakthrough',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 1,
				bgmNN: 1000,
				bgmDB: 1000,
				bgmNB: 1000,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 500 },
				},
				finalhp: {
					2: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 73,
						y: 148,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 176,
						y: 249,
						compDiff: {
							2: ['1','2']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 246,
						y: 270,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'C'
					},
					'C': {
						type: 4,
						x: 320,
						y: 277,
						resource: 2,
						route: 'D'
					},
					'D': {
						type: 1,
						x: 444,
						y: 251,
						subonly: true,
						compDiff: {
							2: ['1','2']
						},
						route: 'E'
					},
					'E': {
						type: 4,
						x: 552,
						y: 184,
						resource: 1,
						routeC: function(ships) {
							if (ships.total >= 6 && ships.CA + ships.CAV >= 2 && ships.CL >= 1) return 'G';
							return 'F';
						}
					},
					'F': {
						type: 2,
						x: 428,
						y: 122,
						resource: 2,
						amount: [160,320],
						end: true
					},
					'G': {
						type: 1,
						x: 669,
						y: 218,
						compDiff: {
							2: ['1','2']
						},
						compDiffF: {
							2: ['3']
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Bay Inrush!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 1,
				bgmNN: 1000,
				bgmDB: 1000,
				bgmNB: 1000,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 1000 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 10,  //x4
				nodes: {
					'Start': {
						type: 0,
						x: 81,
						y: 211,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 185,
						y: 158,
						compDiff: {
							2: ['1']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 279,
						y: 117,
						subonly: true,
						compDiff: {
							2: ['1']
						},
						route: 'C'
					},
					'C': {
						type: 4,
						x: 342,
						y: 191,
						resource: 2,
						route: 'D'
					},
					'D': {
						type: 1,
						x: 423,
						y: 238,
						subonly: true,
						compDiff: {
							2: ['1']
						},
						route: 'E'
					},
					'E': {
						type: 4,
						x: 495,
						y: 171,
						resource: 1,
						routeC: function(ships) {
							if (ships.BBV >= 2) return 'G';
							return 'F';
						}
					},
					'F': {
						type: 2,
						x: 656,
						y: 280,
						resource: 3,
						amount: [100],
						end: true
					},
					'G': {
						type: 1,
						x: 632,
						y: 117,
						compDiff: {
							2: ['1','2']
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Enemy Anchorage Assault!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 1,
				bgmNN: 1001,
				bgmDB: 1001,
				bgmNB: 1001,
				bossnode: 5,
				hpmode: 2,
				maphp: {
					2: { 1: 2000 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 3,
				reward: {
					items: [56]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 236,
						y: 76,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 310,
						y: 123,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 406,
						y: 131,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 490,
						y: 173,
						compDiff: {
							2: ['1','2']
						},
						route: 'D'
					},
					'D': {
						type: 2,
						x: 450,
						y: 259,
						resource: 3,
						amount: [150,235,360,425],
						route: 'E'
					},
					'E': {
						type: 1,
						x: 317,
						y: 288,
						compDiff: {
							2: ['1']
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	23: {
		name: 'Summer 2013',
		date: '2013-08-01',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/N0VJyTd.png',
		bannerImgAlt: 'http://i.imgur.com/L3be5aR.png',
		noForceFlagRetreat: true,
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Break through the cordon!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 6,
				hpmode: 2,
				maphp: {
					2: { 1: 140 },
				},
				finalhp: {
					2: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 76,
						y: 212,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 194,
						y: 231,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'B': .5, 'D': .5 }
					},
					'B': {
						type: 2,
						x: 332,
						y: 162,
						resource: 1,
						amount: [35, 40, 45, 55, 65, 70, 75, 80, 85, 90, 95, 100, 105],
						route: 'C'
					},
					'C': {
						type: 1,
						x: 429,
						y: 78,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 367,
						y: 262,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 563,
						y: 223,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'F': .5, 'G': .5 }
					},
					'F': {
						type: 1,
						x: 658,
						y: 206,
						subonly: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true,
						boss: true
					},
					'G': {
						type: 2,
						x: 393,
						y: 352,
						resource: 8,
						amount: [1],
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Eliminate the enemy naval threat!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 8,
				hpmode: 2,
				maphp: {
					2: { 1: 900 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 20,
				nodes: {
					'Start': {
						type: 0,
						x: 64,
						y: 116,
						routeC: function(ships) {
							if (ships.AV) return 'A';
							return (Math.random() < .5)? 'A' : 'E';
						}
					},
					'A': {
						type: 1,
						x: 253,
						y: 128,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 433,
						y: 115,
						subonly: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						routeR: { 'C': .5, 'D': .5 }
					},
					'C': {
						type: 2,
						x: 608,
						y: 92,
						resource: 3,
						amount: [55,60,65,70,105],
						end: true
					},
					'D': {
						type: 4,
						x: 559,
						y: 236,
						resource: 1,
						route: 'H'
					},
					'E': {
						type: 1,
						x: 172,
						y: 229,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 299,
						y: 346,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'B': .5, 'G': .5 }
					},
					'G': {
						type: 1,
						x: 483,
						y: 321,
						subonly: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						route: 'H'
					},
					'H': {
						type: 1,
						x: 644,
						y: 338,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Assault the enemy staging area!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 1400 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 10,
				nodes: {
					'Start': {
						type: 0,
						x: 64,
						y: 244,
						routeC: function(ships) {
							if (ships.DD >= 2) return 'D';
							return (Math.random() < .5)? 'A' : 'D';
						}
					},
					'A': {
						type: 1,
						x: 138,
						y: 166,
						compDiff: {
							2: ['1','2']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 255,
						y: 110,
						compDiff: {
							2: ['1','2']
						},
						route: 'C'
					},
					'C': {
						type: 4,
						x: 334,
						y: 159,
						resource: 2,
						route: 'F'
					},
					'D': {
						type: 1,
						x: 198,
						y: 328,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'E': .5, 'F': .5 }
					},
					'E': {
						type: 1,
						x: 380,
						y: 343,
						subonly: true,
						compDiff: {
							2: ['1','2']
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 414,
						y: 256,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'G': .4, 'H': .3, 'I': .3 }
					},
					'G': {
						type: 1,
						x: 570,
						y: 133,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true,
						boss: true
					},
					'H': {
						type: 2,
						x: 435,
						y: 69,
						resource: 4,
						amount: [45,50,55,60,65,75,80,95,105],
						end: true
					},
					'I': {
						type: 2,
						x: 592,
						y: 297,
						resource: 8,
						amount: [1],
						end: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Strike the enemy super dreadnought battleship!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 2000 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 3,
				reward: {
					ships: [131]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 64,
						y: 186,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 172,
						y: 224,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 273,
						y: 220,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							if (ships.DD >= 2) return 'D';
							return (Math.random() < .5)? 'D' : 'C';
						}
					},
					'C': {
						type: 4,
						x: 367,
						y: 221,
						resource: 1,
						route: 'E'
					},
					'D': {
						type: 1,
						x: 429,
						y: 343,
						compDiff: {
							2: ['1','2']
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 468,
						y: 215,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'F': .5, 'G': .5 }
					},
					'F': {
						type: 2,
						x: 509,
						y: 96,
						resource: 9,
						amount: [1],
						end: true
					},
					'G': {
						type: 1,
						x: 605,
						y: 208,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	24: {
		name: 'Fall 2013',
		date: '2013-11-01',
		diffMode: 1,
		allowDiffs: [2],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/aPx281n.png',
		bannerImgAlt: 'http://i.imgur.com/6WjZOpE.png',
		noForceFlagRetreat: true,
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Solomon Islands',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 7,
				hpmode: 2,
				maphp: {
					2: { 1: 240 },
				},
				finalhp: {
					2: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 112,
						y: 169,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 1,
						x: 267,
						y: 126,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 237,
						y: 176,
						subonly: true,
						compDiff: {
							2: ['1','2']
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 394,
						y: 205,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'D': .2, 'E': .4, 'F': .4 }
					},
					'D': {
						type: 2,
						x: 607,
						y: 174,
						resource: 1,
						amount: [15,20,35,40,45],
						end: true
					},
					'E': {
						type: 1,
						x: 526,
						y: 260,
						compDiff: {
							2: ['1','2']
						},
						route: 'G'
					},
					'F': {
						type: 3,
						x: 470,
						y: 307,
						route: 'G'
					},
					'G': {
						type: 1,
						x: 654,
						y: 312,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Lunga Point',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 22,
				bgmNN: 22,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 11,
				hpmode: 2,
				maphp: {
					2: { 1: 1000 },
				},
				finalhp: {
					2: 0,
				},
				dayCheck: function() {
					var pass = false;
					for (var i=1; i<=2; i++) {
						if (FLEETS2[0].ships[i].HP/FLEETS2[0].ships[i].maxHP > .25) pass = true;
					}
					return pass;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 151,
						y: 92,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 272,
						y: 110,
						compDiff: {
							2: ['1','2','3','4']
						},
						routeC: function(ships) {
							if (ships.CL) return (Math.random() < .5)? 'B' : 'C';
							return 'B';
						}
					},
					'B': {
						type: 4,
						x: 387,
						y: 143,
						resource: 2,
						routeC: function(ships) {
							if (ships.aBB >= 3) return 'E';
							return 'F';
						}
					},
					'C': {
						type: 1,
						x: 247,
						y: 259,
						compDiff: {
							2: ['1','2']
						},
						routeR: { 'D': .5, 'H': .5 }
					},
					'D': {
						type: 1,
						x: 145,
						y: 316,
						nightToDay: true,
						compDiff: {
							2: ['1','2']
						},
						end: true
					},
					'E': {
						type: 1,
						x: 515,
						y: 121,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'I'
					},
					'F': {
						type: 2,
						x: 479,
						y: 192,
						resource: 4,
						amount: [5,10,15],
						route: 'I'
					},
					'G': {
						type: 3,
						x: 448,
						y: 293,
						routeR: { 'F': .5, 'I': .5 }
					},
					'H': {
						type: 2,
						x: 313,
						y: 345,
						resource: 1,
						amount: [10,15],
						route: 'G'
					},
					'I': {
						type: 1,
						x: 575,
						y: 256,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'J': .4, 'K': .6 }
					},
					'J': {
						type: 1,
						x: 602,
						y: 136,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'K': {
						type: 1,
						x: 638,
						y: 321,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Santa Cruz Islands',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 3,
				bgmNN: 3,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 10,
				hpmode: 2,
				maphp: {
					2: { 1: 1350 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 45,
				nodes: {
					'Start': {
						type: 0,
						x: 100,
						y: 135,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 1,
						x: 214,
						y: 112,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 183,
						y: 209,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							if (ships.CAV || ships.BBV || ships.CVL) return 'D';
							return (Math.random() < .5)? 'D' : 'G';
						}
					},
					'C': {
						type: 1,
						x: 367,
						y: 102,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return (Math.random() < .5)? 'D' : 'E';
							return 'E'; //?
						}
					},
					'D': {
						type: 1,
						x: 327,
						y: 269,
						compDiff: {
							2: ['1','2']
						},
						routeC: function(ships) {
							if (ships.aCV >= 2) return 'F';
							return (Math.random() < .5)? 'F' : 'H';
						}
					},
					'E': {
						type: 1,
						x: 519,
						y: 144,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							if (ships.BB + ships.FBB >= 2 || ships.aBB >= 3) return 'I';
							return 'J';
						}
					},
					'F': {
						type: 3,
						x: 491,
						y: 244,
						routeR: { 'E': .5, 'J': .5 }
					},
					'G': {
						type: 1,
						x: 132,
						y: 288,
						compDiff: {
							2: ['1','2']
						},
						end: true
					},
					'H': {
						type: 1,
						x: 431,
						y: 309,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'I': {
						type: 1,
						x: 620,
						y: 89,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'J': {
						type: 1,
						x: 637,
						y: 228,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Ironbottom Sound',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 22,
				bgmNN: 22,
				bgmDB: 3,
				bgmNB: 3,
				bossnode: 9,
				hpmode: 2,
				maphp: {
					2: { 1: 2900 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 15,
				dayCheck: function() {
					var pass = false;
					for (var i=1; i<=2; i++) {
						if (FLEETS2[0].ships[i].HP/FLEETS2[0].ships[i].maxHP > .25) pass = true;
					}
					return pass;
				},
				nodes: {
					'Start': {
						type: 0,
						x: 125,
						y: 94,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 246,
						y: 131,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 337,
						y: 169,
						route: 'C'
					},
					'C': {
						type: 1,
						x: 448,
						y: 150,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							if (ships.FBB >= 2) return 'F';
							return 'D';
						}
					},
					'D': {
						type: 4,
						x: 534,
						y: 119,
						resource: 2,
						routeC: function(ships) {
							if (ships.aBB >= 3) return 'G';
							return 'E';
						}
					},
					'E': {
						type: 2,
						x: 614,
						y: 166,
						resource: 3,
						amount: [20,25,40,50],
						route: 'F'
					},
					'F': {
						type: 1,
						x: 508,
						y: 256,
						compDiff: {
							2: ['1','2','3']
						},
						routeR: { 'I': .6, 'H': .4 }
					},
					'G': {
						type: 1,
						x: 627,
						y: 79,
						nightToDay: true,
						compDiff: {
							2: ['1']
						},
						end: true
					},
					'H': {
						type: 1,
						x: 403,
						y: 338,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3','4']
						},
						end: true
					},
					'I': {
						type: 1,
						x: 312,
						y: 276,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Ironbottom Sound, Final Stage',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 22,
				bgmNN: 22,
				bgmDB: 1002,
				bgmNB: 1002,
				bossnode: 11,
				hpmode: 2,
				maphp: {
					2: { 1: 2750 },
				},
				finalhp: {
					2: 0,
				},
				hpRegenTick: 12,
				dayCheck: function() {
					var pass = false;
					for (var i=1; i<=2; i++) {
						if (FLEETS2[0].ships[i].HP/FLEETS2[0].ships[i].maxHP > .25) pass = true;
					}
					return pass;
				},
				reward: {
					ships: [143]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 145,
						y: 116,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 250,
						y: 153,
						compDiff: {
							2: ['1','2','3']
						},
						routeC: function(ships) {
							var speed = FLEETS1[0].ships[0].SPD;
							for (var i=0; i<FLEETS1[0].ships.length; i++) {
								if (FLEETS1[0].ships[i].SPD != speed) return 'C';
							}
							return 'B';
						}
					},
					'B': {
						type: 3,
						x: 334,
						y: 181,
						routeC: function(ships) {
							if (ships.aBB == 2) return 'D';
							return 'E';
						}
					},
					'C': {
						type: 1,
						x: 307,
						y: 258,
						subonly: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 446,
						y: 132,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'H'
					},
					'E': {
						type: 1,
						x: 426,
						y: 217,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'I'
					},
					'F': {
						type: 3,
						x: 404,
						y: 297,
						routeR: { 'G': .5, 'I': .5 }
					},
					'G': {
						type: 1,
						x: 261,
						y: 332,
						compDiff: {
							2: ['1','2']
						},
						end: true
					},
					'H': {
						type: 4,
						x: 547,
						y: 177,
						resource: 2,
						routeC: function(ships) {
							if (ships.DD) return (Math.random() < .7)? 'K' : 'J';
							return (Math.random() < .5)? 'K' : 'J';
						}
					},
					'I': {
						type: 1,
						x: 521,
						y: 256,
						nightToDay: true,
						compDiff: {
							2: ['1','2','3']
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 624,
						y: 96,
						compDiff: {
							2: ['1','2','3']
						},
						end: true
					},
					'K': {
						type: 1,
						x: 609,
						y: 300,
						compDiff: {
							2: ['1','2','3']
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	25: {
		name: 'Winter 2013',
		nameT: 'Counterattack! Fleet of Fog',
		date: '2013-12-24',
		diffMode: 1,
		allowDiffs: [2,1],
		allowFleets: [0],
		bannerImg: 'http://i.imgur.com/WGhBfSf.jpg',
		bannerImgAlt: 'http://i.imgur.com/HGuOC0q.jpg',
		initReward: {
			'ships': [2001],
		},
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Battle off Kannonzaki Point',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 107,
				bgmNN: 107,
				bgmDB: 998,
				bgmNB: 998,
				bossnode: 4,
				hpmode: 1,
				bossHP: 3, //needed for replayer
				maphp: {
					2: { 1: 3 },
					1: { 1: 3 },
				},
				finalhp: {
					2: 1,
					1: 1,
				},
				reward: {
					'ships': [2002],
					// 'items': [62],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 289,
						y: 107,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 369,
						y: 178,
						compDiff: {
							2: ['1','2'],
							1: ['3','4','5'],
						},
						compHQ: {
							15: ['1','2'],
							1: ['3','4','5'],
						},
						routeC: function(ships) {
							if (ships.SS+ships.SSV == ships.total) return 'C';
							return (Math.random() < .5)? 'B':'C';
						}
					},
					'B': {
						type: 1,
						x: 422,
						y: 250,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							15: ['1'],
							1: ['2'],
						},
						route: 'D',
					},
					'C': {
						type: 1,
						x: 268,
						y: 228,
						compDiff: {
							2: ['1','2'],
							1: ['3','4','5'],
						},
						compHQ: {
							15: ['1','2'],
							1: ['3','4','5'],
						},
						route: 'D',
					},
					'D': {
						type: 1,
						x: 348,
						y: 340,
						boss: true,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							15: ['1'],
							1: ['2'],
						},
						end: true,
					},
				},
			},
			2: {
				name: 'E-2',
				nameT: 'Battle of Iwo-jima Island',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 107,
				bgmNN: 107,
				bgmDB: 998,
				bgmNB: 998,
				bossnode: 7,
				hpmode: 1,
				bossHP: 4,
				maphp: {
					2: { 1: 4 },
					1: { 1: 4 },
				},
				finalhp: {
					2: 1,
					1: 1,
				},
				reward: {
					'ships': [2003],
					// 'items': [42]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 113,
						y: 114,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 249,
						y: 156,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							30: ['1'],
							1: ['2'],
						},
						routeC: function(ships) {
							if (ships.SS+ships.SSV == ships.total) return 'D';
							return (Math.random() < .5)? 'B':'D';
						},
					},
					'B': {
						type: 1,
						x: 309,
						y: 302,
						compDiff: {
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							30: ['1'],
							1: ['2'],
						},
						routeR: {'C':.5,'F':.5},
					},
					'C': {
						type: 1,
						x: 481,
						y: 311,
						compDiff: {
							2: ['1','1b'],
							1: ['3'],
						},
						compHQ: {
							30: ['1','1b'],
							1: ['3'],
						},
						route: 'G',
					},
					'D': {
						type: 1,
						x: 385,
						y: 84,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							30: ['1'],
							1: ['3'],
						},
						route: 'E',
					},
					'E': {
						type: 4,
						x: 516,
						y: 175,
						resource: 2,
						route: 'G',
					},
					'F': {
						type: 2,
						x: 428,
						y: 235,
						resource: 1,
						amount: [35,40,45,65,70,75,80,85,90,95,100,105,110,115,120],
						end: true,
					},
					'G': {
						type: 1,
						x: 561,
						y: 254,
						boss: true,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							30: ['1'],
							1: ['3'],
						},
						end: true,
					},
				},
			},
			3: {
				name: 'E-3',
				nameT: 'Fleet of Fog - Decisive Battle!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 107,
				bgmNN: 107,
				bgmDB: 998,
				bgmNB: 998,
				bossnode: 8,
				hpmode: 1,
				bossHP: 5,
				maphp: {
					2: { 1: 5 },
					1: { 1: 5 },
				},
				finalhp: {
					2: 1,
					1: 1,
				},
				reward: {
					'ships': [155],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 98,
						y: 207,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 219,
						y: 206,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.SS+ships.SSV >= 4) return 'C';
							if (ships.aBB + ships.CV + ships.CVB + ships.CVN <= 0 && ships.speed >= 10) return 'D';
							if (CHDATA.event.maps[3].hp <= 1) return 'C';
							return (Math.random() < .75)? 'B':'C';
						},
					},
					'B': {
						type: 1,
						x: 440,
						y: 207,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						routeC: function(ships) {
							return (Math.random() < .2*(ships.CV+ships.CVB+ships.CVN))? 'E':'H';
						},
					},
					'C': {
						type: 1,
						x: 316,
						y: 119,
						compDiff: {
							2: ['1'],
							1: ['4'],
						},
						compHQ: {
							45: ['1'],
							1: ['4'],
						},
						route: 'B',
					},
					'D': {
						type: 1,
						x: 292,
						y: 274,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						route: 'F',
					},
					'E': {
						type: 2,
						x: 529,
						y: 114,
						resource: 3,
						amount: [50,55,70,80,85,90,100,105,110,115,120,125,130,140,145,150],
						end: true,
					},
					'F': {
						type: 1,
						x: 441,
						y: 317,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						routeR: {'G':.5,'H':.5},
					},
					'G': {
						type: 1,
						x: 621,
						y: 347,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						end: true,
					},
					'H': {
						type: 1,
						x: 633,
						y: 208,
						boss: true,
						compDiff: {
							2: ['1'],
							1: ['3'],
						},
						compHQ: {
							45: ['1'],
							1: ['3'],
						},
						end: true,
					},
				},
			},
		},
	},
	26: {
		name: 'Spring 2014',
		date: '2014-04-23',
		diffMode: 1,
		allowDiffs: [3,2,1],
		allowFleets: [0,1],
		bannerImg: 'http://i.imgur.com/txZwlUB.png',
		bannerImgAlt: 'http://i.imgur.com/Xs9uKF7.png',
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Southwest of Samewani Sea - Battle of Samewani Sea',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 8,
				bgmNN: 8,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 8,
				maphp: {
					3: { 1: 528 },
					2: { 1: 528 },
					1: { 1: 456 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 106,
						y: 99,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 183,
						y: 184,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							70: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 2) return 'B';
							let numDrums = 0, numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								let found = false;
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrums++;
										found = true;
									}
								}
								if (found) numDrumShips++;
							}
							if (ships.CA >= 2 && numDrums >= 3 && numDrumShips >= 2) return 'C';
							return (Math.random() < .5)? 'B' : 'C';
						}
					},
					'B': {
						type: 1,
						x: 296,
						y: 127,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							70: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'D'
					},
					'C': {
						type: 3,
						x: 269,
						y: 220,
						route: 'E'
					},
					'D': {
						type: 1,
						x: 472,
						y: 154,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeL: { 40: 'H', 37: 'F' }
					},
					'E': {
						type: 1,
						x: 363,
						y: 213,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							70: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							let numDrums = 0, numDrumShips = 0;
							for (let ship of FLEETS1[0].ships) {
								let found = false;
								for (let eq of ship.equips) {
									if (eq.type == DRUM) {
										numDrums++;
										found = true;
									}
								}
								if (found) numDrumShips++;
							}
							if (ships.CA >= 2 && numDrums >= 3 && numDrumShips >= 2) return 'G';
							return 'D';
						}
					},
					'F': {
						type: 3,
						x: 564,
						y: 85,
						end: true
					},
					'G': {
						type: 2,
						x: 444,
						y: 263,
						resource: 3,
						amount: [20],
						route: 'H'
					},
					'H': {
						type: 1,
						x: 539,
						y: 271,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Southwest of Zunda Strait - Across The Zunda Strait',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 8,
				bgmNN: 8,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 10,
				maphp: {
					3: { 1: 780 },
					2: { 1: 780 },
					1: { 1: 588 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 353,
						y: 82,
						routeC: function(ships) {
							if (ships.CV && ships.aCV == 2) return 'A';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 1,
						x: 265,
						y: 152,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3','4'],
						},
						compHQ: {
							75: ['1'],
							35: ['2'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.CV == 1) return (Math.random() < .9)? 'D' : 'E';
							if (ships.BBV) return (Math.random() < .75)? 'D' : 'E';
							return (Math.random() < .5)? 'D' : 'E';
						}
					},
					'B': {
						type: 1,
						x: 403,
						y: 154,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							65: ['1'],
							30: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.CA == 2) return 'D';
							if (ships.CAV == 2) return 'D';
							return (Math.random() < .5)? 'C' : 'D';
						}
					},
					'C': {
						type: 1,
						x: 479,
						y: 204,
						compDiff: {
							
						},
						routeC: function(ships) {
							if (ships.CLT) return (Math.random() < .5)? 'F' : 'H';
							return 'H';
						}
					},
					'D': {
						type: 1,
						x: 354,
						y: 234,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'G'
					},
					'E': {
						type: 2,
						x: 112,
						y: 210,
						resource: 4,
						amount: [30],
						end: true
					},
					'F': {
						type: 4,
						x: 581,
						y: 151,
						resource: 1,
						end: true
					},
					'G': {
						type: 3,
						x: 358,
						y: 304,
						route: 'H'
					},
					'H': {
						type: 1,
						x: 447,
						y: 319,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						routeL: { 40: 'J', 37: 'I' }
					},
					'I': {
						type: 3,
						x: 562,
						y: 344,
						end: true
					},
					'J': {
						type: 1,
						x: 593,
						y: 242,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							50: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Port Wine Area - Assault! Destroy Port Wine Operation',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 8,
				bgmNN: 8,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 12,
				maphp: {
					3: { 1: 2660 },
					2: { 1: 2660 },
					1: { 1: 2660 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 248,
						y: 82,
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 2) return 'A';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 1,
						x: 331,
						y: 146,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 194,
						y: 210,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							65: ['1'],
							30: ['2'],
							1: ['3'],
						},
						route: 'D'
					},
					'C': {
						type: 3,
						x: 448,
						y: 109,
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 2) return 'E';
							return (Math.random() < .5)? 'E' : 'F';
						}
					},
					'D': {
						type: 2,
						x: 213,
						y: 285,
						route: 'G'
					},
					'E': {
						type: 1,
						x: 551,
						y: 133,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'H'
					},
					'F': {
						type: 1,
						x: 431,
						y: 200,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 315,
						y: 325,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 523,
						y: 221,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeL: { 40: 'L', 37: 'J' }
					},
					'I': {
						type: 1,
						x: 451,
						y: 268,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						routeL: { 40: 'L', 37: 'K' }
					},
					'J': {
						type: 4,
						x: 636,
						y: 219,
						resource: 1,
						end: true
					},
					'K': {
						type: 3,
						x: 441,
						y: 350,
						end: true
					},
					'L': {
						type: 1,
						x: 562,
						y: 310,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Central Pacific Sea - Sweep Against Subs in the Frontline',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 10,
				bgmNN: 10,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 8,
				maphp: {
					3: { 1: 315 },
					2: { 1: 315 },
					1: { 1: 315 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 105,
						y: 210,
						routeC: function(ships) {
							if (ships.CL >= 4 || ships.SS + ships.SSV >= 3) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 210,
						y: 203,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.DD >= 2) return 'C';
							return (Math.random() < .5)? 'C' : 'B';
						}
					},
					'B': {
						type: 1,
						x: 268,
						y: 310,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['1'],
						},
						compHQ: {
							1: ['1'],
						},
						end: true
					},
					'C': {
						type: 3,
						x: 281,
						y: 143,
						routeC: function(ships) {
							if (ships.DD >= 5 || ships.DD >= 4 && ships.CL >= 1) return 'D';
							return 'E';
						}
					},
					'D': {
						type: 1,
						x: 424,
						y: 114,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeL: { 5: 'H', 2: 'F' }
					},
					'E': {
						type: 1,
						x: 381,
						y: 281,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						routeR: { 'D': .5, 'G': .5 }
					},
					'F': {
						type: 3,
						x: 595,
						y: 78,
						end: true
					},
					'G': {
						type: 1,
						x: 551,
						y: 329,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['2'],
						},
						compHQ: {
							40: ['1'],
							1: ['2'],
						},
						end: true
					},
					'H': {
						type: 1,
						x: 558,
						y: 206,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'North Pacific Sea - Capture Peacock Island Operation',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 10,
				bgmNN: 10,
				bgmDB: 9,
				bgmNB: 9,
				bossnode: 10,
				maphp: {
					3: { 1: 3600 },
					2: { 1: 3600 },
					1: { 1: 3600 },
				},
				finalhp: {
					3: 0,
					2: 0,
					1: 0,
				},
				reward: {
					ships: [140]
				},
				nodes: {
					'Start': {
						type: 0,
						x: 98,
						y: 130,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 248,
						y: 101,
						end: true
					},
					'B': {
						type: 1,
						x: 226,
						y: 182,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10) return 'C';
							if (ships.CLT >= 2) return 'C';
							return 'D';
						}
					},
					'C': {
						type: 4,
						x: 305,
						y: 129,
						resource: 1,
						route: 'E'
					},
					'D': {
						type: 3,
						x: 252,
						y: 302,
						route: 'E'
					},
					'E': {
						type: 1,
						x: 376,
						y: 189,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							75: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB == 3) return 'F';
							if (ships.CV + ships.CVB <= 2 && ships.BB >= 3) return 'G';
							if (ships.CV + ships.CVB <= 2 && ships.FBB >= 3) return 'G';
							return (Math.random() < .5)? 'F': 'G';
						}
					},
					'F': {
						type: 1,
						x: 464,
						y: 128,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) {
								this.showLoSPlane = null;
								return 'H';
							}
							this.showLoSPlane = 'J';
							return checkELoS33(getELoS33(1),{ 40: 'J', 37: 'H' });
						}
					},
					'G': {
						type: 1,
						x: 463,
						y: 288,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) {
								this.showLoSPlane = null;
								return 'I';
							}
							this.showLoSPlane = 'J';
							return checkELoS33(getELoS33(1),{ 40: 'J', 37: 'I' });
						}
					},
					'H': {
						type: 3,
						x: 589,
						y: 89,
						end: true
					},
					'I': {
						type: 3,
						x: 612,
						y: 319,
						end: true
					},
					'J': {
						type: 1,
						x: 553,
						y: 210,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						compHQ: {
							80: ['1'],
							40: ['2'],
							1: ['3'],
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	27: {
		name: 'Summer 2014',
		date: '2014-08-08',
		diffMode: 1,
		allowDiffs: [3,2,1],
		allowFleets: [0,1],
		bannerImg: 'http://i.imgur.com/1rQiUHS.jpg',
		bannerImgAlt: 'http://i.imgur.com/TsVcRjn.jpg',
		lockSupport: true,
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Advance to the Northern AL Area!',
				fleetTypes: [0],
				bgmMap: 2027,
				bgmDN: 14,
				bgmNN: 14,
				bgmDB: 15,
				bgmNB: 15,
				bossnode: 11,
				maphp: {
					3: { 1: 528 },
					2: { 1: 528 },
					1: { 1: 528 },
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 88,
				},
				giveLock: 'AL',
				checkLock: ['MI'],
				nodes: {
					'Start': {
						type: 0,
						x: 179,
						y: 296,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 297,
						y: 252,
						compDiff: {
							3: ['HQ60+ 1','HQ60+ 2'],
							2: ['HQ35+ 1','HQ35+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						compHQ: {
							60: ['HQ60+ 1','HQ60+ 2'],
							35: ['HQ35+ 1','HQ35+ 2'],
							1: ['HQ1+ 1','HQ1+ 2'],
						},
						routeC: function(ships) {
							if (ships.SS||ships.SSV) return 'C';
							else if (ships.CV+ships.CVL+ships.CVB >= 3) return 'C';
							else if (ships.DD >= 4) return 'B';
							else if (ships.DD >= 2 && ships.CVL >= 2) return 'C';
							else return 'H';
						}
					},
					'B': {
						type: 1,
						x: 410,
						y: 203,
						night: true,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ50+'],
							1:['HQ1+'],
						},
						compHQ:{
							100:['HQ100+ 1','HQ100+ 2'],
							50:['HQ50+'],
							1:['HQ1+'],
						},
						route: 'E',
					},
					'C': {
						type: 1,
						x: 249,
						y: 165,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ50+'],
							1:['HQ1+'],
						},
						compHQ:{
							100:['HQ100+ 1','HQ100+ 2'],
							50:['HQ50+'],
							1:['HQ1+'],
						},
						routeC: function(ships) {
							if (ships.CV+ships.CVL+ships.CVB >= 3) return 'F';
							else if (ships.SS+ships.SSV >= 4) return 'F';
							else if (ships.CL) return 'D';
							else return ((Math.random()<.5)? 'B' : 'D');
						}
					},
					'D': {
						type: 1,
						x: 364,
						y: 98,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ100+ 1','HQ100+ 2'],
							1:['HQ100+ 1','HQ100+ 2'],
						},
						compHQ:{
							1:['HQ100+ 1','HQ100+ 2'],
						},
						route: 'E',
					},
					'E': {
						type: 3,
						x: 503,
						y: 129,
						routeL: { 60:'K', 57:'G' }
					},
					'F': {
						type: 3,
						x: 169,
						y: 131,
						end: true,
					},
					'G': {
						type: 3,
						x: 613,
						y: 96,
						end: true,
					},
					'H': {
						type: 1,
						x: 424,
						y: 314,
						night: true,
						compDiff:{
							3:['HQ60+ 1','HQ60+ 2'],
							2:['HQ40+ 1','HQ40+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						compHQ:{
							100:['HQ60+ 1','HQ60+ 2'],
							50:['HQ40+ 1','HQ40+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						route: 'I',
					},
					'I': {
						type: 1,
						x: 532,
						y: 263,
						compDiff:{
							3:['HQ90+ 1','HQ90+ 2'],
							2:['HQ50+ 1','HQ50+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						compHQ:{
							90:['HQ90+ 1','HQ90+ 2'],
							50:['HQ50+ 1','HQ50+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						routeC: function(ships) {
							if (ships.DD + ships.CL + ships.CLT + ships.CA + ships.CAV < 2) {
								this.showLoSPlane = null;
								return 'J';
							}
							this.showLoSPlane = 'K';
							return checkELoS33(getELoS33(1),{60:'K',57:'J'});
						}
					},
					'J': {
						type: 3,
						x: 619,
						y: 301,
						end: true,
					},
					'K': {
						type: 1,
						x: 584,
						y: 180,
						boss: true,
						compDiff:{
							3:['HQ100+ 1','HQ100+ 2'],
							2:['HQ55+ 1','HQ55+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						compHQ:{
							100:['HQ100+ 1','HQ100+ 2'],
							55:['HQ55+ 1','HQ55+ 2'],
							1:['HQ1+ 1','HQ1+ 2'],
						},
						end: true,
					}
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Diversionary Tactics! Wreck the Northern Harbour!',
				fleetTypes: [0],
				bgmMap: 2027,
				bgmDN: 14,
				bgmNN: 14,
				bgmDB: 15,
				bgmNB: 15,
				bossnode: 11,
				maphp: {
					3: { 1: 2300 },
					2: { 1: 2300 },
					1: { 1: 2300 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 500,
				},
				giveLock: 'AL',
				checkLock: ['MI'],
				nodes: {
					'Start': {
						type: 0,
						x: 181,
						y: 327,
						routeC: function(ships) {
							if (ships.DD >= 4) return 'C';
							if (ships.aBB||(ships.CV+ships.CVB+ships.CVN)||ships.SS||ships.SSV) return 'A';
							if (ships.DD >=2 && ships.CVL <= 2 && ships.CA+ships.CAV <= 2) return 'C';
							return 'A';
						}
					},
					'A': {
						type: 3,
						x: 107,
						y: 221,
						route: 'B',
					},
					'B': {
						type: 1,
						x: 217,
						y: 129,
						compDiff: {
							3: ['1','1b'],
							2: ['2','2b','3'],
							1: ['4','5'],
						},
						compHQ: {
							70: ['1','1b'],
							40: ['2','2b','3'],
							1: ['4','5'],
						},
						routeC: function(ships) {
							if (ships.aCV >= 3 || ships.aBB >= 3) return 'F';
							return 'D';
						}
					},
					'C': {
						type: 1,
						x: 304,
						y: 311,
						compDiff: {
							3: ['1','2'],
							2: ['1','3'],
							1: ['3'],
						},
						compHQ: {
							60: ['1','2'],
							40: ['1','3'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.aBB||ships.aCV) return 'D';
							return 'G';
						}
					},
					'D': {
						type: 1,
						x: 314,
						y: 209,
						compDiff: {
							3: ['1','1b','1c'],
							2: ['2','3'],
							1: ['4','4b'],
						},
						compHQ: {
							60: ['1','1b','1c'],
							40: ['2','3'],
							1: ['4','4b'],
						},
						route: 'E',
					},
					'E': {
						type: 1,
						x: 372,
						y: 149,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['4','5'],
						},
						compHQ: {
							60: ['1','2'],
							40: ['2','3'],
							30: ['3','5'],
							1: ['4','5'],
						},
						routeL: { 70: 'K', 50: 'F' },
					},
					'F': {
						type: 3,
						x: 450,
						y: 83,
						end: true,
					},
					'G': {
						type: 1,
						x: 501,
						y: 291,
						compDiff: {
							3: ['2','2b'],
							2: ['3','2b'],
							1: ['3','1'],
						},
						compHQ: {
							60: ['2','2b'],
							40: ['3','2b'],
							1: ['3','1'],
						},
						routeL: { 60: 'E', 59: 'I', 40: 'H' },
					},
					'H': {
						type: 3,
						x: 626,
						y: 322,
						end: true,
					},
					'I': {
						type: 1,
						x: 615,
						y: 242,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['1'],
						},
						compHQ: {
							1: ['1'],
						},
						routeC: function(ships) {
							if (ships.DD >= 4) return 'K';
							return (Math.random() < .5)? 'K' : 'J';
						}
					},
					'J': {
						type: 2,
						x: 657,
						y: 152,
						resource: 2,
						amount: [30],
						end: true,
					},
					'K': {
						type: 1,
						x: 537,
						y: 143,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						compHQ: {
							100: ['1'],
							55: ['3'],
							1: ['5'],
						},
						compHQF: {
							100: ['2'],
							55: ['4'],
							1: ['6'],
						},
						boss: true,
						end: true,
					},
				},
			},
			3: {
				name: 'E-3',
				nameT: 'The Decisive Battle! Starting Operation MI',
				fleetTypes: [1],
				bgmMap: 2027,
				bgmDN: 16,
				bgmNN: 16,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 10,
				maphp: {
					3: { 1: 2000 },
					2: { 1: 2000 },
					1: { 1: 2000 },
				},
				finalhp: {
					3: 250,
					2: 250,
					1: 250,
				},
				giveLock: 'MI',
				checkLock: ['AL'],
				nodes: {
					'Start': {
						type: 0,
						x: 98,
						y: 211,
						route: 'A',
					},
					'A': {
						type: 3,
						x: 213,
						y: 170,
						routeC: function(ships) {
							if (ships.speed <= 5) return 'B';
							if (ships.aCV <= 3) return 'D';
							if (ships.AV) return 'C';
							if (ships.aBB <= 0) return (Math.random()>.5)? 'C':'D';
							return ['B','C','D'][Math.floor(Math.random()*3)];
						},
					},
					'B': {
						type: 1,
						x: 347,
						y: 111,
						aironly: true,
						compDiff: {
							3:['1','2'],
							2:['1','2'],
							1:['2'],
						},
						compHQ: {
							60:['1','2'],
							1:['2'],
						},
						route: 'E',
					},
					'C': {
						type: 3,
						x: 367,
						y: 204,
						route: 'E',
					},
					'D': {
						type: 1,
						x: 296,
						y: 247,
						aironly: true,
						compDiff: {
							3:['1','2'],
							2:['1','3'],
							1:['3'],
						},
						compHQ: {
							100:['1','2'],
							60:['1','3'],
							1:['3'],
						},
						route: 'F',
					},
					'E': {
						type: 1,
						x: 477,
						y: 171,
						aironly: true,
						compDiff: {
							3:['1','2','3'],
							2:['1','2'],
							1:['1','2'],
						},
						compHQ: {
							100:['1','2','3'],
							1:['1','2'],
						},
						route: 'H',
					},
					'F': {
						type: 3,
						x: 425,
						y: 305,
						routeL: {100:'H',90:'I'},
					},
					'G': {
						type: 3,
						x: 517,
						y: 119,
						end: true,
					},
					'H': {
						type: 1,
						x: 569,
						y: 227,
						aironly: true,
						compDiff: {
							3:['1','2'],
							2:['1','3'],
							1:['1','3'],
						},
						compHQ: {
							100:['1','2'],
							1:['1','3'],
						},
						routeL: {100:'J',90:'G'},
					},
					'I': {
						type: 3,
						x: 603,
						y: 320,
						end: true,
					},
					'J': {
						type: 1,
						x: 617,
						y: 120,
						boss: true,
						compDiff: {
							3:['1','2'],
							2:['4'],
							1:['6','7'],
						},
						compDiffF: {
							3:['3'],
							2:['5'],
							1:['8'],
						},
						compHQ: {
							105:['1','2'],
							70:['4'],
							1:['6','7'],
						},
						compHQF: {
							105:['3'],
							70:['5'],
							1:['8'],
						},
						end: true,
					},
				},
			},
			4: {
				name: 'E-4',
				nameT: 'Invasion of Midway Island',
				fleetTypes: [1],
				bgmMap: 2027,
				bgmDN: 16,
				bgmNN: 16,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 11,
				maphp: {
					3: { 1: 5550 },
					2: { 1: 5550 },
					1: { 1: 5550 },
				},
				finalhp: {
					3: 600,
					2: 600,
					1: 600,
				},
				giveLock: 'MI',
				checkLock: ['AL'],
				nodes: {
					'Start': {
						type: 0,
						x: 109,
						y: 148,
						routeC: function(ships) {
							if (ships.LHA) return 'B';
							if (ships.escort.DD >= 4) return (Math.random() < .8)? 'B':'A';
							if (ships.aBB >= 2 && ships.speed>=10) return 'A';
							return (Math.random() < .5)? 'A':'B';
						},
					},
					'A': {
						type: 1,
						x: 259,
						y: 105,
						aironly: true,
						compDiff: {
							3: ['1','2','3'],
							2: ['1','3'],
							1: ['1','3'],
						},
						compHQ: {
							90: ['1','2','3'],
							1: ['1','3'],
						},
						route: 'C',
					},
					'B': {
						type: 1,
						x: 245,
						y: 197,
						aironly: true,
						compDiff: {
							3: ['1','2','3'],
							2: ['1','2','4'],
							1: ['1','2','4'],
						},
						compHQ: {
							100: ['1','2','3'],
							1: ['1','2','4'],
						},
						routeR: {'C':.5,'D':.5},
					},
					'C': {
						type: 1,
						x: 371,
						y: 135,
						subonly: true,
						compDiff: {
							3: ['1','1b','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							90: ['1','1b','2'],
							1: ['2','3'],
						},
						routeC: function(ships) {
							if (ships.aCV <= 3 && ships.speed>=10) return 'F';
							return (Math.random()<.8)? 'E':'F';
						},
					},
					'D': {
						type: 1,
						x: 280,
						y: 276,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3'],
						},
						routeL: {100:'H',90:'L'},
					},
					'E': {
						type: 1,
						x: 569,
						y: 90,
						aironly: true,
						compDiff: {
							3: ['1','4','5'],
							2: ['1','2','3','4'],
							1: ['1','2'],
						},
						compHQ: {
							100: ['1','4','5'],
							60: ['1','2','3','4'],
							1: ['1','2'],
						},
						end: true,
					},
					'F': {
						type: 3,
						x: 540,
						y: 176,
						routeL: {100:'J',90:'I'},
					},
					'G': {
						type: 3,
						x: 184,
						y: 309,
						end: true,
					},
					'H': {
						type: 1,
						x: 372,
						y: 328,
						compDiff: {
							3: ['1','2'],
							2: ['2','3','3b'],
							1: ['2','3','3b'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3','3b'],
						},
						route: 'K',
					},
					'I': {
						type: 3,
						x: 626,
						y: 248,
						end: true,
					},
					'J': {
						type: 1,
						x: 494,
						y: 304,
						aironly: true,
						compDiff: {
							3: ['1','2','4'],
							2: ['1','3','5'],
							1: ['1','3','5'],
						},
						compHQ: {
							100: ['1','2','4'],
							1: ['1','3','5'],
						},
						routeL: {100:'K',90:'H'},
					},
					'K': {
						type: 1,
						x: 392,
						y: 242,
						boss: true,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						compHQ: {
							105: ['1'],
							70: ['3'],
							1: ['5'],
						},
						compHQF: {
							105: ['2'],
							70: ['4'],
							1: ['6'],
						},
						end: true,
					},
				},
			},
			5: {
				name: 'E-5',
				nameT: 'Securing the MI Islands',
				fleetTypes: [1],
				bgmMap: 2027,
				bgmDN: 12,
				bgmNN: 12,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 12,
				maphp: {
					3: { 1: 3150 },
					2: { 1: 3150 },
					1: { 1: 3150 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				giveLock: 'MI',
				checkLock: ['AL'],
				nodes: {
					'Start': {
						type: 0,
						x: 111,
						y: 141,
						routeR: {'A':.5,'B':.5},
					},
					'A': {
						type: 1,
						x: 230,
						y: 184,
						subonly: true,
						compDiff: {
							3: ['1','1b'],
							2: ['1','1b'],
							1: ['1','1b'],
						},
						compHQ: {
							1: ['1','1b'],
						},
						routeC: function(ships) {
							if (ships.DD+ships.escort.DD >= 4) return 'C';
							return (Math.random()<.5)? 'C':'D';
						}
					},
					'B': {
						type: 1,
						x: 200,
						y: 237,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							90: ['1','2'],
							1: ['2','3'],
						},
						route: 'E',
					},
					'C': {
						type: 1,
						x: 361,
						y: 117,
						aironly:true,
						compDiff: {
							3: ['1','2','3'],
							2: ['2','3'],
							1: ['2','4'],
						},
						compHQ: {
							100: ['1','2','3'],
							1: ['2','3','4'],
						},
						routeR: {'G':.5,'F':.5},
					},
					'D': {
						type: 1,
						x: 360,
						y: 199,
						night: true,
						compDiff: {
							3: ['2','2b'],
							2: ['1','2b'],
							1: ['1'],
						},
						compHQ: {
							100: ['2','2b'],
							1: ['1','2b'],
						},
						routeR: {'G':.5,'H':.5},
					},
					'E': {
						type: 1,
						x: 322,
						y: 301,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['2','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3'],
						},
						routeR: {'H':.5,'I':.5},
					},
					'F': {
						type: 3,
						x: 521,
						y: 82,
						end: true,
					},
					'G': {
						type: 1,
						x: 496,
						y: 155,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['1','2'],
							1: ['1','2'],
						},
						compHQ: {
							1: ['1','2'],
						},
						routeL: {100:'L',90:'J'},
					},
					'H': {
						type: 1,
						x: 462,
						y: 239,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						compHQ: {
							90: ['1','2'],
							70: ['2','3'],
							1: ['3','4'],
						},
						route: 'L',
					},
					'I': {
						type: 1,
						x: 469,
						y: 299,
						aironly: true,
						compDiff: {
							3: ['1','2','3'],
							2: ['2','3','4'],
							1: ['2','3','4'],
						},
						compHQ: {
							90: ['1','2','3'],
							1: ['2','3','4'],
						},
						routeL: {100:'L',90:'K'},
					},
					'J': {
						type: 3,
						x: 615,
						y: 124,
						end: true,
					},
					'K': {
						type: 3,
						x: 615,
						y: 324,
						end: true,
					},
					'L': {
						type: 1,
						x: 594,
						y: 230,
						boss: true,
						end: true,
						compDiff: {
							3: ['1'],
							2: ['3','4'],
							1: ['6'],
						},
						compDiffF: {
							3: ['2'],
							2: ['5'],
							1: ['7'],
						},
						compHQ: {
							105: ['1'],
							80: ['3','4'],
							1: ['6'],
						},
						compHQF: {
							105: ['2'],
							80: ['5'],
							1: ['7'],
						},
					},
				},
			},
			6: {
				name: 'E-6',
				nameT: 'Counter Attack to AL/MI Operation',
				fleetTypes: [0],
				bgmMap: 2027,
				bgmDN: 16,
				bgmNN: 16,
				bgmDB: 17,
				bgmNB: 17,
				bossnode: 10,
				maphp: {
					3: { 1: 4000 },
					2: { 1: 4000 },
					1: { 1: 4000 },
				},
				finalhp: {
					3: 400,
					2: 400,
					1: 400,
				},
				checkLock: ['AL','MI'],
				reward: {
					'ships': [167],
				},
				nodes: {
					'Start': {
						type: 1,
						x: 96,
						y: 122,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 226,
						y: 191,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						compHQ: {
							100: ['1','2'],
							75: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.SS+ships.SSV >= 2) return 'B';
							if (ships.CA+ships.CAV == 2 || ships.CVL == 2 || ships.aCV == 3 || ships.DD == 2) return 'C';
							return (Math.random() < .5)? 'C':'D';
						}
					},
					'B': {
						type: 3,
						x: 268,
						y: 315,
						end: true,
					},
					'C': {
						type: 1,
						x: 358,
						y: 174,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['3','4'],
						},
						compHQ: {
							88: ['1','2'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.CVL == 2) return 'E';
							return (Math.random()<.5)? 'E':'F';
						}
					},
					'D': {
						type: 1,
						x: 354,
						y: 282,
						night: true,
						compDiff: {
							3: ['1'],
							2: ['1','2'],
							1: ['2'],
						},
						compHQ: {
							100: ['1'],
							75: ['1','2'],
							1: ['2'],
						},
						routeR: {'F':.5,'G':.5},
					},
					'E': {
						type: 3,
						x: 464,
						y: 94,
						route: 'H',
					},
					'F': {
						type: 1,
						x: 484,
						y: 222,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3'],
						},
						compHQ: {
							100: ['1','2'],
							75: ['2','3'],
							1: ['3'],
						},
						routeL: {75: 'J', 50: 'H', 0: 'G' },
					},
					'G': {
						type: 3,
						x: 474,
						y: 323,
						end: true,
					},
					'H': {
						type: 1,
						x: 545,
						y: 104,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						compHQ: {
							100: ['1','2'],
							75: ['3','4'],
							1: ['5'],
						},
						routeL: {75:'J',0:'I'},
					},
					'I': {
						type: 3,
						x: 645,
						y: 161,
						end: true,
					},
					'J': {
						type: 1,
						x: 592,
						y: 301,
						boss: true,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['3'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['4'],
						},
						compHQ: {
							100: ['1'],
							1: ['3'],
						},
						compHQF: {
							100: ['2'],
							1: ['4'],
						},
						end: true,
					},
				},
			},
		}
	},
	28: {
		name: 'Fall 2014',
		date: '2014-11-14',
		diffMode: 1,
		allowDiffs: [2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/N9FDaqh.png',
		bannerImgAlt: 'http://i.imgur.com/JJYgFR8.png',
		maps: {
			1: {
				name: 'E-1',
				nameT: 'First Operation Kon',
				fleetTypes: [2],
				bgmMap: 2001,
				bgmDN: 27,
				bgmNN: 27,
				bgmDB: 28,
				bgmNB: 28,
				bossnode: 6,
				maphp: {
					3: { 1: 352 },
					2: { 1: 352 },
					1: { 1: 352 },
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 88,
				},
				giveLock: 1,
				checkLock: [2],
				nodes: {
					'Start': {
						type: 0,
						x: 139,
						y: 212,
						routeC: function(ships) {
							if (ships.escort.aBB) return (Math.random() < .75)? 'B' : 'A';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 3,
						x: 238,
						y: 197,
						route: 'C'
					},
					'B': {
						type: 1,
						x: 295,
						y: 301,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 322,
						y: 117,
						compDiff: {
							2: ['1','2','3'],
							1: ['2','3'],
						},
						compHQ: {
							80: ['1','2','3'],
							1: ['2','3'],
						},
						routeC: function(ships) {
							if (ships.escort.DD >= 4) return (Math.random() < .75)? 'E' : 'D';
							return (Math.random() < .25)? 'E' : 'D';
						}
					},
					'D': {
						type: 1,
						x: 399,
						y: 184,
						compDiff: {
							2: ['1','2','3','4'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2','3','4'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.aBB <= 3 && ships.CV+ships.CVB <= 0 && ships.CVL <= 1 && ships.escort.DD >= 4) return 'F';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 486,
						y: 156,
						compDiff: {
							2: ['1','3','5'],
							1: ['2','4'],
						},
						compHQ: {
							80: ['1','3','5'],
							1: ['2','4'],
						},
						routeL: { 100: 'F', 97: 'G' }
					},
					'F': {
						type: 1,
						x: 593,
						y: 249,
						compDiff: {
							2: ['1','2','3','4'],
							1: ['5','6'],
						},
						compHQ: {
							80: ['1','2','3','4'],
							1: ['5','6'],
						},
						compDiffF: {
							2: ['1'],
							1: ['5'],
						},
						compHQF: {
							80: ['1'],
							1: ['5'],
						},
						end: true,
						boss: true
					},
					'G': {
						type: 3,
						x: 610,
						y: 135,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Second Operation Kon',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 27,
				bgmNN: 27,
				bgmDB: 28,
				bgmNB: 28,
				bossnode: 9,
				maphp: {
					3: { 1: 850 },
					2: { 1: 850 },
					1: { 1: 750 },
				},
				finalhp: {
					3: 190,
					2: 190,
					1: 190,
				},
				giveLock: 1,
				checkLock: [2],
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.CL + ships.DD) errors.push('CL and DD only');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 111,
						y: 246,
						routeR: { 'A': .5, 'C': .5 }
					},
					'A': {
						type: 1,
						x: 179,
						y: 187,
						subonly: true,
						compDiff: {
							2: ['1','2'],
							1: ['2','3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['2','3','4'],
						},
						route: 'D'
					},
					'B': {
						type: 3,
						x: 184,
						y: 114,
						end: true
					},
					'C': {
						type: 1,
						x: 271,
						y: 264,
						compDiff: {
							2: ['1','2'],
							1: ['3','4','5'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4','5'],
						},
						routeC: function(ships) {
							if (ships.CL >= 3) {
								this.showLoSPlane = null;
								return 'E';
							}
							if (ships.CL == 2) {
								this.showLoSPlane = null;
								return 'D';
							}
							this.showLoSPlane = 'G';
							return checkELoS33(getELoS33(1),{ 24: 'G', 21: 'D' });
						}
					},
					'D': {
						type: 1,
						x: 278,
						y: 153,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.CL >= 3) {
								this.showLoSPlane = null;
								return 'B';
							}
							this.showLoSPlane = 'G';
							return checkELoS33(getELoS33(1),{ 20: 'G', 17: 'F' });
						}
					},
					'E': {
						type: 3,
						x: 281,
						y: 332,
						end: true
					},
					'F': {
						type: 4,
						x: 388,
						y: 124,
						resource: 1,
						route: 'H'
					},
					'G': {
						type: 1,
						x: 430,
						y: 187,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 490,
						y: 95,
						compDiff: {
							2: ['1','2'],
							1: ['1','2'],
						},
						compHQ: {
							1: ['1','2'],
						},
						routeL: { 15: 'I', 12: 'J' }
					},
					'I': {
						type: 1,
						x: 565,
						y: 158,
						compDiff: {
							2: ['1','2','3'],
							1: ['5','6'],
						},
						compHQ: {
							80: ['1','2','3'],
							1: ['5','6'],
						},
						compDiffF: {
							2: ['4'],
							1: ['7'],
						},
						compHQF: {
							80: ['4'],
							1: ['7'],
						},
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 593,
						y: 96,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Third Operation Kon',
				fleetTypes: [2],
				bgmMap: 2001,
				bgmDN: 25,
				bgmNN: 25,
				bgmDB: 26,
				bgmNB: 26,
				bossnode: 9,
				maphp: {
					3: { 1: 2000 },
					2: { 1: 2000 },
					1: { 1: 2000 },
				},
				finalhp: {
					3: 400,
					2: 400,
					1: 400,
				},
				giveLock: 2,
				checkLock: [1],
				nodes: {
					'Start': {
						type: 0,
						x: 180,
						y: 131,
						routeC: function(ships) {
							if (ships.aCV >= 2 || ships.escort.CLT >= 2) return 'A';
							if (ships.LHA + ships.AV + ships.CL + ship.DD <= 0) return 'A';
							if (ships.CV + ships.CVB + ships.BB + ships.FBB) return 'B';
							if (ships.BBV <= 2 && ships.CA + ships.CAV + ships.CLT + (ships.CL + ships.DD)/2 <= 3) return 'C';
							return 'B';
						}
					},
					'A': {
						type: 4,
						x: 94,
						y: 218,
						resource: 1,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 275,
						y: 311,
						compDiff: {
							2: ['1','2'],
							1: ['2','3','4'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3','4'],
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 287,
						y: 169,
						compDiff: {
							2: ['1','2'],
							1: ['1','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['1','3'],
						},
						route: 'E'
					},
					'D': {
						type: 3,
						x: 295,
						y: 89,
						end: true
					},
					'E': {
						type: 4,
						x: 385,
						y: 143,
						resource: 1,
						routeL: { 100: 'G', 97: 'D' }
					},
					'F': {
						type: 1,
						x: 398,
						y: 319,
						compDiff: {
							2: ['1','2'],
							1: ['2','3','4'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3','4'],
						},
						routeC: function(ships) {
							if (ships.LHA) return 'H';
							if (isShipInList(ships.ids,62) && isShipInList(ships.ids,65)) return 'H';
							if (isShipInList(ships.escort.ids,50) && isShipInList(ships.escort.ids,138)) return 'H';
							if (ships.BBV == 2) return (Math.random() < .75)? 'H' : 'E';
							if (ships.CA == 2) return (Math.random() < .75)? 'H' : 'E';
							return (Math.random() < .75)? 'E' : 'H';
						}
					},
					'G': {
						type: 1,
						x: 468,
						y: 86,
						compDiff: {
							2: ['1','2'],
							1: ['2','3'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['2','3'],
						},
						routeC: function(ships) {
							if (ships.aCV || ships.escort.CA + ships.escort.CAV) return 'H';
							return 'I';
						}
					},
					'H': {
						type: 1,
						x: 515,
						y: 168,
						compDiff: {
							2: ['1','2','3'],
							1: ['3','4','5'],
						},
						compHQ: {
							100: ['1','2','3'],
							1: ['3','4','5'],
						},
						routeL: { 100: 'I', 97: 'J' }
					},
					'I': {
						type: 1,
						x: 631,
						y: 124,
						compDiff: {
							2: ['1','2'],
							1: ['4','5'],
						},
						compHQ: {
							85: ['1','2'],
							1: ['4','5'],
						},
						compDiffF: {
							2: ['3'],
							1: ['6'],
						},
						compHQF: {
							85: ['3'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 649,
						y: 226,
						end: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Operation Intercept Task Force',
				fleetTypes: [1,2],
				bgmMap: 2001,
				bgmDN: 25,
				bgmNN: 25,
				bgmDB: 26,
				bgmNB: 26,
				bossnode: 10,
				maphp: {
					3: { 1: 2420 },
					2: { 1: 2420 },
					1: { 1: 2220 },
				},
				finalhp: {
					3: 390,
					2: 390,
					1: 370,
				},
				reward: {
					ships: [415],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 96,
						y: 172,
						routeC: function(ships) {
							if (ships.escort.DD == 2 && ships.escort.CLT >= 2) return 'C';
							if (ships.escort.DD >= 5) return (Math.random() < .75)? 'B' : 'C';
							if (ships.escort.DD == 4) return (Math.random() < .5)? 'B' : 'C';
							if (ships.escort.DD == 3) return (Math.random() < .25)? 'B' : 'C';
							return 'C';
						}
					},
					'A': {
						type: 3,
						x: 168,
						y: 281,
						end: true
					},
					'B': {
						type: 3,
						x: 232,
						y: 95,
						route: 'D'
					},
					'C': {
						type: 1,
						x: 236,
						y: 168,
						subonly: true,
						compDiff: {
							2: ['1','2','3'],
							1: ['4','5'],
						},
						compHQ: {
							80: ['1','2','3'],
							1: ['4','5'],
						},
						routeC: function(ships) {
							let letter = checkELoS33(getELoS33(1,1,true),{ 90: 'X', 87: 'A' });
							if (letter == 'A') return 'A';
							return (Math.random() < .5)? 'D' : 'E';
						}
					},
					'D': {
						type: 1,
						x: 356,
						y: 129,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT >= 3) return 'E';
							if (ships.aBB + ships.escort.aBB >= 5) return 'E';
							if (ships.aBB + ships.escort.aBB == 4) return (Math.random() < .25)? 'G' : 'E';
							if (ships.aBB + ships.escort.aBB == 3) return (Math.random() < .75)? 'G' : 'E';
							if (ships.aBB + ships.escort.aBB <= 2) return 'G';
						}
					},
					'E': {
						type: 1,
						x: 375,
						y: 269,
						compDiff: {
							2: ['1','2','3','4'],
							1: ['1','2','3','4'],
						},
						compHQ: {
							1: ['1','2','3','4'],
						},
						route: 'G'
					},
					'F': {
						type: 3,
						x: 422,
						y: 95,
						end: true
					},
					'G': {
						type: 1,
						x: 482,
						y: 175,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							100: ['1','2'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							this.showLoSPlane = 'J';
							if (checkELoS33(getELoS33(1,1,true),{ 90: 'X', 87: 'F' }) == 'F') return 'F';
							if (ships.aCV <= 2 && ships.LHA + ships.CL) return this.showLoSPlane = 'J';
							if (ships.aCV >= 3 && ships.aBB >= 2) return this.showLoSPlane = 'I';
							if (ships.CV + ships.CVB >= 3) return this.showLoSPlane = 'I';
							if (ships.CVL >= 4) return this.showLoSPlane = (Math.random() < .9)? 'J' : 'I';
							if (ships.aCV <= 3 && ships.CV + ships.CVB <= 2) return this.showLoSPlane = 'J';
							return this.showLoSPlane = (Math.random() < .5)? 'H' : 'J';
						}
					},
					'H': {
						type: 1,
						x: 543,
						y: 268,
						compDiff: {
							2: ['1','2'],
							1: ['3','4'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['3','4'],
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 578,
						y: 107,
						compDiff: {
							2: ['1','2'],
							1: ['1','2'],
						},
						compHQ: {
							80: ['1','2'],
							1: ['1','2'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 637,
						y: 190,
						compDiff: {
							2: ['1','2'],
							1: ['4','5'],
						},
						compHQ: {
							90: ['1','2'],
							1: ['4','5'],
						},
						compDiffF: {
							2: ['3'],
							1: ['6'],
						},
						compHQF: {
							90: ['3'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	29: {
		name: 'Winter 2015',
		date: '2015-02-06',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/0Hva9QA.png',
		bannerImgAlt: 'http://i.imgur.com/eLlUiO1.png',
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Wreck the enemy submarines around our anchorage!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 30,
				bgmNN: 30,
				bgmDB: 32,
				bgmNB: 32,
				bossnode: 9,
				maphp: {
					3: { 1: 200 },
					2: { 1: 180 },
					1: { 1: 180 },
				},
				finalhp: {
					3: 48,
					2: 45,
					1: 45,
				},
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.CL + ships.DD) errors.push('CL and DD only');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 355,
						y: 238,
						routeR: { 'A': .5, 'B': .5 }
					},
					'A': {
						type: 1,
						x: 338,
						y: 319,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'C'
					},
					'B': {
						type: 3,
						x: 252,
						y: 305,
						route: 'E'
					},
					'C': {
						type: 3,
						x: 481,
						y: 340,
						route: 'D'
					},
					'D': {
						type: 1,
						x: 611,
						y: 260,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 144,
						y: 257,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'F': {
						type: 3,
						x: 160,
						y: 147,
						routeL: { 3: 'H', 0: 'J' }
					},
					'G': {
						type: 1,
						x: 589,
						y: 174,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.CL >= 5) return 'K';
							return 'I';
						}
					},
					'H': {
						type: 1,
						x: 329,
						y: 88,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						routeC: function(ships) {
							if (ships.CL >= 4) {
								this.showLoSPlane = null;
								return 'J';
							}
							if (ships.CL > 1) {
								this.showLoSPlane = null;
								return 'G';
							}
							this.showLoSPlane = 'I';
							return checkELoS33(getELoS33(1,1),{ 8: 'I', 5: 'G' });
						}
					},
					'I': {
						type: 1,
						x: 546,
						y: 101,
						subonly: true,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 257,
						y: 200,
						end: true
					},
					'K': {
						type: 3,
						x: 647,
						y: 125,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Bombing of Truk anchorage',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 30,
				bgmNN: 30,
				bgmDB: 33,
				bgmNB: 33,
				bossnode: 9,
				maphp: {
					3: { 1: 736 },
					2: { 1: 736 },
					1: { 1: 736 },
				},
				finalhp: {
					3: 160,
					2: 160,
					1: 160,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 247,
						y: 185,
						routeC: function(ships) {
							if (ships.aBB > 2) return 'B';
							if (ships.CV + ships.CVB > 2) return 'B';
							if (ships.CLT > 1) return 'B';
							if (ships.DD + ships.CL + ships.CVL + ships.LHA + ships.AR >= 2) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 336,
						y: 240,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.CL >= 1 && ships.CAV <= 1 && ships.DD+ships.CAV >= 4) return 'D';
							return 'F';
						}
					},
					'B': {
						type: 4,
						x: 210,
						y: 108,
						resource: 1,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 3) return 'J';
							if (ships.DD + ships.CL + ships.CVL + ships.LHA + ships.AR <= 0) return 'J';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 360,
						y: 113,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'D': {
						type: 3,
						x: 247,
						y: 307,
						route: 'E'
					},
					'E': {
						type: 1,
						x: 423,
						y: 285,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 469,
						y: 201,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.DD >= 1 && ships.aCV <= 4 && ships.CV + ships.CVB <= 1 && ships.aBB + ships.CV + ships.CVB <= 2 && ships.CLT <= 1) return 'G';
							return 'H';
						}
					},
					'G': {
						type: 1,
						x: 557,
						y: 328,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 20: 'I', 17: 'L' }
					},
					'H': {
						type: 1,
						x: 565,
						y: 134,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 20: 'I', 17: 'K' }
					},
					'I': {
						type: 1,
						x: 638,
						y: 210,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'J': {
						type: 3,
						x: 108,
						y: 192,
						end: true
					},
					'K': {
						type: 3,
						x: 645,
						y: 94,
						end: true
					},
					'L': {
						type: 3,
						x: 659,
						y: 276,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Combined Fleet, sortie now!',
				fleetTypes: [1,2],
				bgmMap: 2001,
				bgmDN: 30,
				bgmNN: 30,
				bgmDB: 34,
				bgmNB: 34,
				bossnode: 11,
				maphp: {
					3: { 1: 1080 },
					2: { 1: 1080 },
					1: { 1: 1000 },
				},
				finalhp: {
					3: 270,
					2: 270,
					1: 210,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 103,
						y: 152,
						routeC: function(ships) {
							if (isShipInList(ships.escort.ids,56) && isShipInList(ships.escort.ids,137)) return 'C';
							if (ships.CAV == 2) return 'C';
							return (Math.random() < .7)? 'A' : 'C';
						}
					},
					'A': {
						type: 3,
						x: 235,
						y: 112,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 349,
						y: 178,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['4'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'F';
							if (ships.escort.aBB + ships.escort.CLT) return 'F';
							if (ships.escort.DD >= 4) return 'C';
							if (ships.aBB >= 4) return 'F';
							if (ships.aCV >= 4) return 'F';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 314,
						y: 273,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							return 'E';
						}
					},
					'D': {
						type: 3,
						x: 213,
						y: 313,
						end: true
					},
					'E': {
						type: 4,
						x: 418,
						y: 330,
						resource: 1,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'F';
							if (ships.escort.aBB + ships.escort.CLT) return 'F';
							if (ships.escort.DD >= 4) return 'H';
							if (ships.aBB >= 4) return 'F';
							if (ships.aCV >= 4) return 'F';
							return 'H';
						}
					},
					'F': {
						type: 1,
						x: 429,
						y: 265,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT >= 2) return 'G';
							return 'H';
						}
					},
					'G': {
						type: 1,
						x: 495,
						y: 150,
						compDiff: {
							3: ['1','2'],
							2: ['1','2'],
							1: ['1','2'],
						},
						routeL: { 80: 'I', 77: 'J' }
					},
					'H': {
						type: 1,
						x: 543,
						y: 313,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'K'
					},
					'I': {
						type: 1,
						x: 613,
						y: 215,
						compDiff: {
							3: ['1'],
							2: ['1'],
							1: ['1'],
						},
						route: 'K'
					},
					'J': {
						type: 3,
						x: 629,
						y: 89,
						end: true
					},
					'K': {
						type: 1,
						x: 655,
						y: 278,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Seize the Enemy Task Force!',
				fleetTypes: [0],
				bgmMap: 2001,
				bgmDN: 31,
				bgmNN: 31,
				bgmDB: 35,
				bgmNB: 35,
				bossnode: 11,
				maphp: {
					3: { 1: 2100 },
					2: { 1: 2100 },
					1: { 1: 2100 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 180,
						y: 192,
						routeC: function(ships) {
							if (ships.CLT >= 2) return 'A';
							if (ships.speed >= 10 && ships.aCV && ships.CL + ships.DD >= 3) return 'A';
							if (ships.speed >= 10 && ships.aCV >= 2) return 'A';
							if (ships.CL == 1 && ships.DD >= 4 && ships.CLT + ships.CA + ships.CAV + ships.DD - 4 == 1) return 'E';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 141,
						y: 117,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						routeC: function(ships) {
							return (Math.random() < .5)? 'E' : 'C';
						}
					},
					'B': {
						type: 3,
						x: 272,
						y: 203,
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.aCV + ships.CLT <= 0) return 'D';
							if (isShipInList(ships.ids,56) || isShipInList(ships.ids,137) || (isShipInList(ships.ids,415) && isShipInList(ships.ids,122))) return 'D';
							return 'F';
						}
					},
					'C': {
						type: 3,
						x: 81,
						y: 235,
						end: true
					},
					'D': {
						type: 1,
						x: 328,
						y: 274,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'G'
					},
					'E': {
						type: 4,
						x: 400,
						y: 101,
						resource: 1,
						route: 'H'
					},
					'F': {
						type: 1,
						x: 402,
						y: 201,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'H'
					},
					'G': {
						type: 1,
						x: 454,
						y: 314,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 504,
						y: 142,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.aCV >= 2) return 'J';
							if (ships.BBV >= 2) return 'J';
							return 'I';
						}
					},
					'I': {
						type: 1,
						x: 582,
						y: 291,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 18: 'K', 15: 'M' }
					},
					'J': {
						type: 1,
						x: 611,
						y: 96,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 18: 'K', 15: 'L' }
					},
					'K': {
						type: 1,
						x: 622,
						y: 206,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'L': {
						type: 3,
						x: 662,
						y: 153,
						end: true
					},
					'M': {
						type: 3,
						x: 666,
						y: 257,
						end: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Decisive Battle! Combined Fleet, Begin Counterattack!',
				fleetTypes: [1,2],
				bgmMap: 2001,
				bgmDN: 31,
				bgmNN: 31,
				bgmDB: 36,
				bgmNB: 36,
				bossnode: 10,
				maphp: {
					3: { 1: 3000 },
					2: { 1: 3000 },
					1: { 1: 3000 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 415,
				},
				reward: {
					ships: [331],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 139,
						y: 200,
						routeC: function(ships) {
							if (ships.aCV >= 3) return 'A';
							if (ships.escort.CLT >= 2 || ships.escort.SS + ships.escort.SSV) return 'A';
							if (ships.speed >= 10) return 'B';
							if (isShipInList(ships.escort.ids,56) || isShipInList(ships.escort.ids,137) || (isShipInList(ships.escort.ids,415) && isShipInList(ships.escort.ids,122))) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 233,
						y: 207,
						compDiff: {
							3: ['1'],
							2: ['2'],
							1: ['3'],
						},
						routeC: function(ships) {
							if (ships.AR + ships.CT) return 'C';
							if (ships.escort.SS + ships.escort.SSV) return 'C';
							return (Math.random() < .7)? 'D' : 'C';
						}
					},
					'B': {
						type: 1,
						x: 220,
						y: 310,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'D'
					},
					'C': {
						type: 3,
						x: 313,
						y: 120,
						routeC: function(ships) {
							if (ships.escort.SS + ships.escort.SSV) return 'M';
							return 'E';
						}
					},
					'D': {
						type: 4,
						x: 356,
						y: 274,
						resource: 1,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return (Math.random() < .75)? 'E' : 'F';
							return (Math.random() < .75)? 'F' : 'E';
						}
					},
					'E': {
						type: 1,
						x: 453,
						y: 90,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.CLT >= 3) return 'L';
							return (Math.random() < .5)? 'G' : 'H';
						}
					},
					'F': {
						type: 1,
						x: 473,
						y: 309,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.CLT >= 3) return 'K';
							return (Math.random() < .5)? 'G' : 'I';
						}
					},
					'G': {
						type: 1,
						x: 521,
						y: 207,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'J'
					},
					'H': {
						type: 1,
						x: 629,
						y: 142,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 628,
						y: 278,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 599,
						y: 208,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
					'K': {
						type: 3,
						x: 584,
						y: 333,
						end: true
					},
					'L': {
						type: 3,
						x: 635,
						y: 80,
						end: true
					},
					'M': {
						type: 3,
						x: 182,
						y: 108,
						end: true
					},
				}
			}
		}
	},
	30: {
		name: 'Spring 2015',
		date: '2015-04-28',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/Hjh3Gbj.png',
		bannerImgAlt: 'http://i.imgur.com/3NvBtqp.png',
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Begin Preparation, Operation No.11!',
				fleetTypes: [0],
				bgmMap: 2030,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 8,
				maphp: {
					3: { 1: 440 },
					2: { 1: 440 },
					1: { 1: 440 },
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 88,
				},
				additionalChecks: function(ships,errors) {
					if (ships.total > ships.CL + ships.DD) errors.push('CL and DD only');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 663,
						y: 264,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 591,
						y: 214,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 482,
						y: 246,
						routeS: ['C','D']
					},
					'C': {
						type: 1,
						x: 395,
						y: 145,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.CL >= 4) {
								this.showLoSPlane = null;
								return 'E';
							}
							this.showLoSPlane = 'H';
							return checkELoS33(getELoS33(1,1),{ 15: 'H', 14: 'E' });
						}
					},
					'D': {
						type: 1,
						x: 355,
						y: 320,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'E': {
						type: 3,
						x: 274,
						y: 102,
						end: true
					},
					'F': {
						type: 1,
						x: 208,
						y: 287,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.CL >= 5) {
								this.showLoSPlane = null;
								return 'G';
							}
							this.showLoSPlane = 'H';
							return checkELoS33(getELoS33(1,1),{ 15: 'H', 14: 'G' });
						}
					},
					'G': {
						type: 3,
						x: 129,
						y: 233,
						end: true
					},
					'H': {
						type: 1,
						x: 232,
						y: 185,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: '2nd Curry Ocean Operation',
				fleetTypes: [1,2],
				bgmMap: 2030,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 11,
				maphp: {
					3: { 1: 1620 },
					2: { 1: 1620 },
					1: { 1: 1620 },
				},
				finalhp: {
					3: 270,
					2: 270,
					1: 270,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 599,
						y: 316,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return 'A';
							return 'C';
						}
					},
					'A': {
						type: 1,
						x: 645,
						y: 217,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 509,
						y: 170,
						routeS: ['D','E']
					},
					'C': {
						type: 3,
						x: 491,
						y: 287,
						route: 'F'
					},
					'D': {
						type: 1,
						x: 430,
						y: 97,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 382,
						y: 225,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						route: 'G'
					},
					'F': {
						type: 3,
						x: 370,
						y: 310,
						routeS: ['E','H']
					},
					'G': {
						type: 1,
						x: 325,
						y: 133,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 3: 'K', 0: 'I' }
					},
					'H': {
						type: 4,
						x: 245,
						y: 320,
						resource: 1,
						route: 'J'
					},
					'I': {
						type: 3,
						x: 240,
						y: 91,
						end: true
					},
					'J': {
						type: 1,
						x: 186,
						y: 284,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'E'
					},
					'K': {
						type: 1,
						x: 191,
						y: 194,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Disruption of the Bay of Bagel Trade Route',
				fleetTypes: [0],
				bgmMap: 2030,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 10,
				maphp: {
					3: { 1: 910 },
					2: { 1: 910 },
					1: { 1: 845 },
				},
				finalhp: {
					3: 130,
					2: 130,
					1: 130,
				},
				giveLock: 1,
				checkLock: [2,3],
				nodes: {
					'Start': {
						type: 0,
						x: 660,
						y: 243,
						routeC: function(ships) {
							if (ships.SS + ships.SSV >= 5) return 'A';
							if (ships.aBB + ships.CA + ships.CAV >= 4) return 'A';
							if (ships.CA + ships.CAV >= 3) return 'A';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 3,
						x: 561,
						y: 152,
						route: 'C'
					},
					'B': {
						type: 1,
						x: 518,
						y: 322,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 486,
						y: 230,
						subonly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 465,
						y: 133,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'E'
					},
					'E': {
						type: 1,
						x: 376,
						y: 98,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeL: { 18: 'J', 15: 'G' }
					},
					'F': {
						type: 3,
						x: 364,
						y: 286,
						routeS: ['D','H']
					},
					'G': {
						type: 3,
						x: 304,
						y: 191,
						end: true
					},
					'H': {
						type: 1,
						x: 215,
						y: 320,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5'],
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 174,
						y: 200,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['3'],
						},
						routeL: { 18: 'J', 15: 'G' }
					},
					'J': {
						type: 1,
						x: 253,
						y: 94,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Decisive battle! Ri-Ranka Island Tactical Operation',
				fleetTypes: [1,2],
				bgmMap: 2030,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 39,
				bgmNB: 39,
				bossnode: 13,
				maphp: {
					3: { 1: 3200 },
					2: { 1: 3200 },
					1: { 1: 2900 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 500,
				},
				giveLock: 2,
				checkLock: [1,3],
				nodes: {
					'Start': {
						type: 0,
						x: 661,
						y: 213,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 1,
						x: 533,
						y: 127,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.escort.SS + ships.escort.SSV) return 'D';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 522,
						y: 305,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 480,
						y: 220,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						route: 'F'
					},
					'D': {
						type: 3,
						x: 456,
						y: 79,
						end: true
					},
					'E': {
						type: 1,
						x: 441,
						y: 155,
						compDiff: {
							3: ['1','2'],
							2: ['3','4'],
							1: ['5','6'],
						},
						routeC: function(ships) {
							if (ships.escort.SS + ships.escort.SSV) {
								this.showLoSPlane = null;
								return 'G';
							}
							this.showLoSPlane = 'M';
							return checkELoS33(getELoS33(1,1,true),{ 3: 'M', 0: 'G' });
						}
					},
					'F': {
						type: 3,
						x: 379,
						y: 280,
						routeS: ['E','I']
					},
					'G': {
						type: 1,
						x: 370,
						y: 126,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						end: true
					},
					'H': {
						type: 3,
						x: 269,
						y: 248,
						routeS: ['J','M']
					},
					'I': {
						type: 1,
						x: 246,
						y: 331,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['4','5'],
						},
						route: 'K'
					},
					'J': {
						type: 2,
						x: 208,
						y: 153,
						resource: 1,
						amount: [55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145,150],
						end: true
					},
					'K': {
						type: 1,
						x: 126,
						y: 254,
						compDiff: {
							3: ['1','2'],
							2: ['3'],
							1: ['4','5'],
						},
						routeL: { 3: 'J', 0: 'L' }
					},
					'L': {
						type: 3,
						x: 82,
						y: 167,
						end: true
					},
					'M': {
						type: 1,
						x: 339,
						y: 176,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Raid on Apricot Atoll Anchorage',
				fleetTypes: [0],
				bgmMap: 2130,
				bgmDN: 40,
				bgmNN: 40,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 14,
				maphp: {
					3: { 1: 2410 },
					2: { 1: 2410 },
					1: { 1: 2110 },
				},
				finalhp: {
					3: 430,
					2: 430,
					1: 430,
				},
				giveLock: 3,
				checkLock: [1,2],
				nodes: {
					'Start': {
						type: 0,
						x: 640,
						y: 114,
						routeC: function(ships) {
							if (ships.SS + ships.SSV && ships.aBB <= 0) return (Math.random() < .75)? 'B' : 'A';
							if (ships.FBB && ships.BB + ships.BBV) return (Math.random() < .75)? 'A' : 'B';
							return (Math.random() < .5)? 'A' : 'B';
						}
					},
					'A': {
						type: 3,
						x: 604,
						y: 250,
						routeC: function(ships) {
							if (ships.aCV >= 3) return 'D';
							if (isShipInList(ships.ids,70) && isShipInList(ships.ids,120)) return 'D';
							if (isShipInList(ships.ids,124) && isShipInList(ships.ids,125)) return 'D';
							if (isShipInList(ships.ids,23) + isShipInList(ships.ids,69) + isShipInList(ships.ids,76) >= 2) return 'D';
							if (isShipInList(ships.ids,9) && isShipInList(ships.ids,54)) return 'D';
							return 'C';
						}
					},
					'B': {
						type: 4,
						x: 508,
						y: 114,
						resource: 1,
						route: 'D'
					},
					'C': {
						type: 1,
						x: 488,
						y: 309,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 446,
						y: 201,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,70) && isShipInList(ships.ids,120)) return 'G';
							if (isShipInList(ships.ids,124) && isShipInList(ships.ids,125)) return 'G';
							if (isShipInList(ships.ids,23) + isShipInList(ships.ids,69) + isShipInList(ships.ids,76) >= 2) return 'G';
							if (isShipInList(ships.ids,9) && isShipInList(ships.ids,54)) return 'G';
							if (isShipInList(ships.ids,83) &&  isShipInList(ships.ids,90) && isShipInList(ships.ids,91)) return 'G';
							return 'F';
						}
					},
					'E': {
						type: 3,
						x: 393,
						y: 325,
						end: true
					},
					'F': {
						type: 1,
						x: 365,
						y: 247,
						aironly: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeL: { 3: 'H', 0: 'E' }
					},
					'G': {
						type: 2,
						x: 333,
						y: 135,
						resource: 1,
						amount: [50,100,150],
						route: 'H'
					},
					'H': {
						type: 3,
						x: 246,
						y: 227,
						routeS: ['I','K']
					},
					'I': {
						type: 1,
						x: 243,
						y: 337,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.aBB >= 5 || ships.BBV >= 3) {
								this.showLoSPlane = null;
								return 'E';
							}
							this.showLoSPlane = 'N';
							return checkELoS33(getELoS33(1,1),{ 3: 'N', 0: 'E' });
						}
					},
					'J': {
						type: 2,
						x: 181,
						y: 72,
						resource: 2,
						amount: [70,100,135],
						end: true
					},
					'K': {
						type: 4,
						x: 167,
						y: 186,
						resource: 1,
						route: 'L'
					},
					'L': {
						type: 1,
						x: 111,
						y: 215,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.aCV >= 5 || ships.aBB + ships.CV >= 3) {
								this.showLoSPlane = null;
								return 'J';
							}
							this.showLoSPlane = 'N';
							return checkELoS33(getELoS33(1,1),{ 3: 'N', 0: 'M' });
						}
					},
					'M': {
						type: 3,
						x: 105,
						y: 111,
						end: true
					},
					'N': {
						type: 1,
						x: 155,
						y: 290,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			},
			6: {
				name: 'E-6',
				nameT: 'Relentless Operation! Across the Stebian Sea',
				fleetTypes: [1,2],
				bgmMap: 2130,
				bgmDN: 40,
				bgmNN: 40,
				bgmDB: 41,
				bgmNB: 41,
				bossnode: 15,
				maphp: {
					3: { 1: 3300 },
					2: { 1: 3030 },
					1: { 1: 3030 },
				},
				finalhp: {
					3: 500,
					2: 415,
					1: 415,
				},
				reward: {
					ships: [445],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 489,
						y: 113,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1) return 'D';
							if (ships.speed >= 10) return 'B';
							return 'F';
						}
					},
					'A': {
						type: 4,
						x: 638,
						y: 247,
						resource: 1,
						routeC: function(ships) {
							if (ships.escort.CLT >= 3) return 'C';
							return 'E';
						}
					},
					'B': {
						type: 3,
						x: 612,
						y: 163,
						route: 'A'
					},
					'C': {
						type: 3,
						x: 593,
						y: 324,
						end: true
					},
					'D': {
						type: 3,
						x: 538,
						y: 233,
						route: 'E'
					},
					'E': {
						type: 3,
						x: 456,
						y: 302,
						routeS: ['H','J']
					},
					'F': {
						type: 3,
						x: 423,
						y: 213,
						routeS: ['G','H']
					},
					'G': {
						type: 1,
						x: 332,
						y: 146,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT >= 3) {
								this.showLoSPlane = null;
								return 'L';
							}
							this.showLoSPlane = 'I';
							return checkELoS33(getELoS33(1,1,true),{ 3: 'I', 0: 'L' });
						}
					},
					'H': {
						type: 1,
						x: 318,
						y: 273,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'K'
					},
					'I': {
						type: 1,
						x: 247,
						y: 183,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'M'
					},
					'J': {
						type: 1,
						x: 226,
						y: 331,
						night: true,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'N'
					},
					'K': {
						type: 1,
						x: 209,
						y: 239,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'M'
					},
					'L': {
						type: 3,
						x: 199,
						y: 84,
						end: true
					},
					'M': {
						type: 1,
						x: 144,
						y: 146,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV && Math.random() < .5) {
								this.showLoSPlane = null;
								return 'L';
							}
							this.showLoSPlane = 'O';
							return checkELoS33(getELoS33(1,1,true),{ 3: 'O', 0: 'L' });
						}
					},
					'N': {
						type: 1,
						x: 118,
						y: 253,
						compDiff: {
							3: ['1','2'],
							2: ['2','3'],
							1: ['3','4'],
						},
						route: 'M'
					},
					'O': {
						type: 1,
						x: 76,
						y: 179,
						compDiff: {
							3: ['1'],
							2: ['3'],
							1: ['5'],
						},
						compDiffF: {
							3: ['2'],
							2: ['4'],
							1: ['6'],
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	31: {
		name: 'Summer 2015',
		date: '2015-08-10',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2],
		bannerImg: 'http://i.imgur.com/2qArUXu.png',
		bannerImgAlt: 'http://i.imgur.com/rB0Q7Z6.png',
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Preparation for Second Operation SN!',
				fleetTypes: [0],
				bgmMap: 2031,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 47,
				bgmNB: 47,
				bossnode: 26,
				maphp: {
					3: { 1: 750 },
					2: { 1: 750 },
					1: { 1: 750 },
				},
				finalhp: {
					3: 190,
					2: 190,
					1: 150,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				additionalChecks: function(ships,errors) {
					if (!ships.CL) errors.push('Min 1 CL');
					if (ships.DD < 2) errors.push('Min 2 DD');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 418,
						y: 144,
						route: 'A',
					},
					'A':{
						type: 1,
						x: 495,
						y: 208,
						routeC: function(ships) {
							if (ships.CL >= 2 || ships.SS+ships.SSV > 0 || ships.ids.length < 6) return 'F';
							if (ships.ids.indexOf(30) != -1 || ships.ids.indexOf(259) != -1) {
								if (ships.aBB <= 1 && ships.aCV <= 0) return 'D';
							}
							if (ships.aCV) return 'C';
							if (ships.aBB) return 'B';
							if (ships.LHA || ships.AV >= 2) return 'D';
							return (Math.random() < .5)? 'B' : 'D';
						},
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
					},
					'B':{
						type: 1,
						x: 507,
						y: 301,
						route: 'D',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2'],
						},
					},
					'C':{
						type: 1,
						x: 585,
						y: 133,
						route: 'E',
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1'],
						},
					},
					'D':{
						type: 2,
						x: 582,
						y: 268,
						resource: 2,
						amount: [15,45],
						route: 'Z',
					},
					'E':{
						type: 1,
						x: 647,
						y: 165,
						route: 'Z',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
					},
					'F':{
						type: 1,
						x: 380,
						y: 299,
						route: 'G',
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
					},
					'G':{
						type: 2,
						x: 247,
						y: 279,
						resource: 1,
						amount: [25,75],
						end: true,
					},
					'Z':{
						type: 1,
						x: 654,
						y: 301,
						boss: true,
						end: true,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy 1'],
						},
					},
				},
			},
			2: {
				name: 'E-2',
				nameT: 'Combined Fleet, to the Solomon Sea!',
				fleetTypes: [1,2],
				bgmMap: 2031,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 47,
				bgmNB: 47,
				bossnode: 26,
				maphp: {
					3: { 1: 1050 },
					2: { 1: 1050 },
					1: { 1: 1050 },
				},
				finalhp: {
					3: 270,
					2: 270,
					1: 270,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 169,
						y: 111,
						route: 'A',
					},
					'A': {
						type: 1,
						x: 264,
						y: 181,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1) return 'C';
							return 'B';
						},
					},
					'B': {
						type: 1,
						x: 316,
						y: 241,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'K';
							if (ships.aBB + ships.CV + ships.CVB + ships.escort.aBB >= 3) return 'D';
							return 'E';
						},
					},
					'C': {
						type: 3,
						x: 336,
						y: 123,
						routeS: ['F','I'],
					},
					'D': {
						type: 1,
						x: 375,
						y: 319,
						compDiff: {
							3: ['Hard'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy'],
						},
						route: 'G',
					},
					'E': {
						type: 1,
						x: 430,
						y: 278,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						route: 'G',
					},
					'F': {
						type: 1,
						x: 445,
						y: 170,
						aironly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'H',
					},
					'G': {
						type: 1,
						x: 462,
						y: 300,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'Z',
					},
					'H': {
						type: 1,
						x: 533,
						y: 230,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeL: { 3:'Z', 0:'L' },
					},
					'I': {
						type: 4,
						x: 548,
						y: 101,
						resource: 1,
						route: 'J',
					},
					'J': {
						type: 1,
						x: 619,
						y: 184,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeL: { 3:'H', 0:'L' },
					},
					'K': {
						type: 3,
						x: 233,
						y: 295,
						end: true,
					},
					'L': {
						type: 3,
						x: 657,
						y: 292,
						end: true,
					},
					'Z': {
						type: 1,
						x: 513,
						y: 327,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						boss: true,
						end: true,
					},

				},
			},
			3: {
				name: 'E-3',
				nameT: 'Clash! Second Southern Pacific Ocean Battle',
				fleetTypes: [1,2],
				bgmMap: 2031,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 47,
				bgmNB: 3,
				bossnode: 26,
				maphp: {
					3: { 1: 2100 },
					2: { 1: 2100 },
					1: { 1: 2100 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				giveLock: 2,
				checkLock: [1,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 164,
						y: 103,
						route: 'A',
					},
					'A': {
						type: 3,
						x: 239,
						y: 144,
						routeS: ['B','C'],
					},
					'B': {
						type: 1,
						x: 286,
						y: 219,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'D',
					},
					'C': {
						type: 1,
						x: 330,
						y: 130,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.CV + ships.CVB >= 3) return 'D';
							if (ships.CLT + ships.escort.CLT >= 2) return 'D';
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'D';
							if (ships.aBB + ships.escort.aBB + ships.CV + ships.CVB <= 4) return 'E';
							return 'D';
						},
					},
					'D': {
						type: 1,
						x: 402,
						y: 228,
						aironly: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB >= 4) return 'E';
							if (ships.CV + ships.CVB >= 3) return 'E';
							if (ships.CLT + ships.escort.CLT >= 2) return 'E';
							if (CHDATA.fleets.combined == 2 && ships.aBB + ships.escort.aBB + ships.CV + ships.CVB <= 2) return 'X';
							if (ships.escort.SS + ships.escort.SSV) return 'X';
							return 'F';
						},
					},
					'E': {
						type: 1,
						x: 436,
						y: 99,
						aironly: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'H',
					},
					'F': {
						type: 3,
						x: 487,
						y: 303,
						routeS: ['G','I'],
					},
					'G': {
						type: 1,
						x: 488,
						y: 200,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeL: {3:'Z',0:'H'},
					},
					'H': {
						type: 1,
						x: 557,
						y: 120,
						compDiff: {
							3: ['Hard'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeL: {3:'Z',0:'J'},
					},
					'I': {
						type: 1,
						x: 588,
						y: 295,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'Z',
					},
					'J': {
						type: 3,
						x: 650,
						y: 104,
						end: true,
					},
					'X': {
						type: 1,
						x: 360,
						y: 329,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						end: true,
					},
					'Z': {
						type: 1,
						x: 641,
						y: 214,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			4: {
				name: 'E-4',
				nameT: 'Charge into the Strait! Destroy the Enemy Airfield!',
				fleetTypes: [0],
				bgmMap: 2031,
				bgmDN: 46,
				bgmNN: 46,
				bgmDB: 22,
				bgmNB: 5,
				bossnode: 26,
				maphp: {
					3: { 1: 3500 },
					2: { 1: 3500 },
					1: { 1: 3500 },
				},
				finalhp: {
					3: 500,
					2: 500,
					1: 500,
				},
				giveLock: 3,
				checkLock: [1,2,4],
				nodes: {
					'Start': {
						type: 0,
						x: 135,
						y: 97,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB > 4) return 'A';
							if (isShipInList(ships.ids,78) && isShipInList(ships.ids,79)) return 'B';
							if (isShipInList(ships.ids,86) && (isShipInList(ships.ids,85) || isShipInList(ships.ids,13))) return 'B';
							if (isShipInList(ships.ids,45) && (isShipInList(ships.ids,34) || isShipInList(ships.ids,405))) return 'B';
							var f1 = isShipInList(ships.ids,9);
							if (f1 && isShipInList(ships.ids,32)) return 'B';
							var f2 = isShipInList(ships.ids,59);
							if (f2 && isShipInList(ships.ids,69) && isShipInList(ships.ids,60)) return 'B';
							if (f1 && f2) return 'B';
							return 'A';
						},
					},
					'A': {
						type: 1,
						x: 136,
						y: 211,
						subonly: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						route: 'C',
					},
					'B': {
						type: 1,
						x: 206,
						y: 149,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'D',
					},
					'C': {
						type: 1,
						x: 208,
						y: 264,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'E',
					},
					'D': {
						type: 3,
						x: 278,
						y: 189,
						routeS: ['E','F'],
					},
					'E': {
						type: 1,
						x: 384,
						y: 239,
						night: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						route: 'G',
					},
					'F': {
						type: 1,
						x: 403,
						y: 124,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium 1'],
							1: ['Easy F'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,76) && ships.DD >= 2) return 'H';
							if (ships.aBB + ships.CV + ships.CVB >= 3) return 'I';
							if (ships.DD >= 2) return 'H';
							return 'I';
						},
					},
					'G': {
						type: 1,
						x: 437,
						y: 265,
						night: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'K';
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'K';
							return 'Z';
						},
					},
					'H': {
						type: 1,
						x: 530,
						y: 209,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium 1'],
							1: ['Easy F'],
						},
						routeL: {3:'Z',0:'L'},
					},
					'I': {
						type: 4,
						x: 511,
						y: 97,
						resource: 1,
						routeC: function(ships) {
							if (ships.DD >= 2) return 'H';
							if (ships.aBB + ships.CV + ships.CVB >= 4) return 'J';
							return 'H';
						}
					},
					'J': {
						type: 1,
						x: 649,
						y: 180,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'L';
							return 'H';
						},
					},
					'K': {
						type: 3,
						x: 388,
						y: 325,
						end: true,
					},
					'L': {
						type: 3,
						x: 672,
						y: 259,
						end: true,
					},
					'Z': {
						type: 1,
						x: 501,
						y: 306,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			5: {
				name: 'E-5',
				nameT: 'Hard Battle! Western Region Deployment Fleet',
				fleetTypes: [0],
				bgmMap: 2131,
				bgmDN: 38,
				bgmNN: 38,
				bgmDB: 40,
				bgmNB: 40,
				bossnode: 26,
				maphp: {
					3: { 1: 2450 },
					2: { 1: 2450 },
					1: { 1: 2450 },
				},
				finalhp: {
					3: 400,
					2: 400,
					1: 400,
				},
				giveLock: 4,
				checkLock: [1,2,3],
				nodes: {
					'Start': {
						type: 0,
						x: 608,
						y: 243,
						routeC: function(ships) {
							if (isShipInList(ships.ids,445) && ships.DD) return 'B';
							if (ships.CL && ships.DD >= 2) return 'B';
							if (ships.CAV && ships.DD >= 2) return 'B';
							if (ships.SS + ships.SSV) return 'B';
							return 'A';
						},
					},
					'A': {
						type: 1,
						x: 530,
						y: 287,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'C',
					},
					'B': {
						type: 3,
						x: 506,
						y: 188,
						routeS: ['C','E'],
					},
					'C': {
						type: 1,
						x: 456,
						y: 314,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'F',
					},
					'D': {
						type: 2,
						x: 408,
						y: 224,
						resource: 1,
						amount: [0,0],
						routeC: function(ships) {
							if (isShipInList(ships.ids,445)) return 'F';
							if (ships.CAV && ships.DD >= 2) return 'F';
							return (Math.random() < .5)? 'F' : 'H';
						},
					},
					'E': {
						type: 1,
						x: 391,
						y: 111,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,445)) return 'D';
							if (ships.aBB >= 3) return 'G';
							if (ships.SS + ships.SSV >= 4) return 'L';
							if (ships.LHA) return 'G';
							if (ships.DD) return 'D';
							if (ships.SS + ships.SSV) return 'G';
							return 'D';
						},
					},
					'F': {
						type: 1,
						x: 349,
						y: 331,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'I',
					},
					'G': {
						type: 1,
						x: 332,
						y: 167,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true,
					},
					'H': {
						type: 1,
						x: 318,
						y: 260,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'J',
					},
					'I': {
						type: 2,
						x: 264,
						y: 316,
						resource: 1,
						amount: [0,0],
						route: 'K',
					},
					'J': {
						type: 1,
						x: 232,
						y: 268,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							return 'K';
						},
					},
					'K': {
						type: 1,
						x: 129,
						y: 268,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB >= 5) return 'M';
							if (ships.DD) return 'Z';
							return 'M';
						},
					},
					'L': {
						type: 3,
						x: 469,
						y: 76,
						end: true,
					},
					'M': {
						type: 3,
						x: 167,
						y: 194,
						end: true,
					},
					'Z': {
						type: 1,
						x: 82,
						y: 172,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			6: {
				name: 'E-6',
				nameT: 'Counterattack! Enter the FS Region',
				fleetTypes: [1,2],
				bgmMap: 2131,
				bgmDN: 49,
				bgmNN: 49,
				bgmDB: 50,
				bgmNB: 50,
				bossnode: 26,
				maphp: {
					3: { 1: 2800 },
					2: { 1: 2800 },
					1: { 1: 2800 },
				},
				finalhp: {
					3: 350,
					2: 350,
					1: 350,
				},
				giveLock: 2,
				checkLock: [1,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 89,
						y: 143,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return 'A';
							var ids = ships.ids.concat(ships.escort.ids);
							if (isShipInList(ids,13) && isShipInList(ids,45)) return 'A';
							if (isShipInList(ids,9) && isShipInList(ids,59)) return 'A';
							if (isShipInList(ids,86) && isShipInList(ids,85)) return 'A';
							return 'C';
						},
					},
					'A': {
						type: 1,
						x: 181,
						y: 198,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.speed >= 10 && ships.escort.speed >= 10
								&& ships.aBB + ships.CV + ships.CVB <= 3
								&& !ships.escort.aBB && ships.escort.DD >= 4) { return 'B'; }
							return 'D';
						},
					},
					'B': {
						type: 1,
						x: 197,
						y: 266,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'F',
					},
					'C': {
						type: 1,
						x: 206,
						y: 100,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.CLT + ships.escort.CLT) return 'O';
							return 'E';
						},
					},
					'D': {
						type: 1,
						x: 238,
						y: 227,
						night: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeC: function(ships) {
							if (ships.CLT + ships.escort.CLT >= 2) return 'F';
							return 'E';
						},
					},
					'E': {
						type: 1,
						x: 261,
						y: 157,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'G',
					},
					'F': {
						type: 1,
						x: 290,
						y: 266,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy'],
						},
						route: 'J',
					},
					'G': {
						type: 3,
						x: 341,
						y: 161,
						routeS: ['F','H'],
					},
					'H': {
						type: 1,
						x: 394,
						y: 88,
						aironly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'L',
					},
					'I': {
						type: 3,
						x: 405,
						y: 206,
						end: true,
					},
					'J': {
						type: 3,
						x: 417,
						y: 306,
						routeS: ['K','M'],
					},
					'K': {
						type: 1,
						x: 491,
						y: 197,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'L';
							if (CHDATA.fleets.combined == 2) return 'L';
							return 'Z';
						},
					},
					'L': {
						type: 1,
						x: 523,
						y: 100,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'P';
							return 'Z';
						},
					},
					'M': {
						type: 1,
						x: 550,
						y: 267,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'N';
							return 'Z';
						},
					},
					'N': {
						type: 3,
						x: 634,
						y: 320,
						end: true,
					},
					'O': {
						type: 3,
						x: 307,
						y: 83,
						end: true,
					},
					'P': {
						type: 3,
						x: 649,
						y: 87,
						end: true,
					},
					'Z': {
						type: 1,
						x: 643,
						y: 207,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
					},
				},
			},
			7: {
				name: 'E-7',
				nameT: 'Operation FS',
				fleetTypes: [1,2],
				bgmMap: 2131,
				bgmDN: 49,
				bgmNN: 49,
				bgmDB: 50,
				bgmNB: 50,
				bossnode: 26,
				maphp: {
					3: { 1: 2000 },
					2: { 1: 2000 },
					1: { 1: 2000 },
				},
				finalhp: {
					3: 255,
					2: 255,
					1: 255,
				},
				checkLock: [4],
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return (debuff.C && debuff.X && debuff.Y);
				},
				reward: {
					'ships': [422],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 162,
						y: 112,
						routeC: function(ships) {
							if (ships.LHA && ships.aCV) return 'B';
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'B';
							if (CHDATA.fleets.combined == 2) return (Math.random() < .75)? 'B' : 'E';
							return (Math.random() < .75)? 'E' : 'B';
						},
					},
					'A': {
						type: 2,
						x: 89,
						y: 276,
						resource: 2,
						amount: [25,65],
						route: 'C',
					},
					'B': {
						type: 1,
						x: 144,
						y: 210,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV + ships.escort.SS + ships.escort.SSV) return 'A';
							if (ships.escort.CLT) return 'A';
							return (Math.random() < .8)? 'X' : 'A';
						},
					},
					'C': {
						type: 1,
						x: 173,
						y: 326,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						end: true,
						debuffGive: function(fleetsE,fleetsF) {
							let ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if ([1513,1536,1558].indexOf(ships[i].mid) != -1 && ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[7].debuff.C = true;
						},
					},
					'D': {
						type: 2,
						x: 242,
						y: 335,
						resource: 2,
						amount: [25,105],
						routeC: function(ships) {
							if (ships.LHA || isShipInList(ships.ids.concat(ships.escort.ids),445)) return 'H';
							return (Math.random() < .5)? 'F' : 'H';
						},
					},
					'E': {
						type: 1,
						x: 270,
						y: 114,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'G',
					},
					'F': {
						type: 1,
						x: 308,
						y: 234,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'G',
					},
					'G': {
						type: 3,
						x: 367,
						y: 152,
						routeS: ['I','J'],
					},
					'H': {
						type: 3,
						x: 399,
						y: 303,
						routeS: ['J','Y'],
					},
					'I': {
						type: 1,
						x: 460,
						y: 104,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'K',
					},
					'J': {
						type: 1,
						x: 466,
						y: 196,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 2) return (Math.random() < .75)? 'L' : 'Y';
							if (ships.aBB + ships.escort.aBB + ships.CV + ships.CVB <= 4) return (Math.random() < .8)? 'M' : 'L';
							if (ships.CV + ships.CVB >= 3) return (Math.random() < .6)? 'M' : 'Y';
							if (ships.CV + ships.CVB == 2) return (Math.random() < .85)? 'M' : 'Y';
							if (ships.escort.aBB >= 2 && Math.random() < .5) return 'Y';
							if (ships.CV + ships.CVB == 1) return (Math.random() < .85)? 'M' : 'L';
						},
					},
					'K': {
						type: 1,
						x: 535,
						y: 94,
						aironly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeL: {3:'M',0:'P'},
					},
					'L': {
						type: 1,
						x: 581,
						y: 240,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT) return 'O';
							return 'Z';
						},
					},
					'M': {
						type: 1,
						x: 619,
						y: 171,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT) return 'N';
							return 'Z';
						},
					},
					'N': {
						type: 3,
						x: 665,
						y: 130,
						end: true,
					},
					'O': {
						type: 3,
						x: 597,
						y: 321,
						end: true,
					},
					'P': {
						type: 3,
						x: 612,
						y: 90,
						end: true,
					},
					'X': {
						type: 1,
						x: 212,
						y: 282,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'D',
						debuffGive: function(fleetsE,fleetsF) {
							let ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if ([1513,1536,1558].indexOf(ships[i].mid) != -1 && ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[7].debuff.X = true;
						},
					},
					'Y': {
						type: 1,
						x: 484,
						y: 314,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeC: function(ships) {
							if (ships.escort.CLT) return 'O';
							return 'L';
						},
						debuffGive: function(fleetsE,fleetsF) {
							let ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if ([1513,1536,1558].indexOf(ships[i].mid) != -1 && ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[7].debuff.Y = true;
						},
					},
					'Z': {
						type: 1,
						x: 647,
						y: 241,
						boss: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						debuffAmount: 100,
					},
				},
			},
		}
	},
	32: {
		name: 'Fall 2015',
		date: '2015-11-18',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		bannerImg: 'https://i.imgur.com/46s7gmq.png',
		bannerImgAlt: 'https://i.imgur.com/JWmN8EI.png',
		ptImpSpecial: 2,
		transportCalc: transportCalcFall15,
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Transport operation! Sweep up the front',
				fleetTypes: [1,2],
				bgmMap: 2032,
				bgmDN: 52,
				bgmNN: 52,
				bgmDB: 53,
				bgmNB: 53,
				bossnode: 10,
				maphp: {
					3: { 1: 440},
					2: { 1: 440},
					1: { 1: 400},
				},
				finalhp: {
					3: 88,
					2: 88,
					1: 80,
				},
				giveLock: 2,
				checkLock: [3],
				nodes: {
					'Start': {
						type: 0,
						x: 100,
						y: 195,
						routeC: function(ships) {
							if (ships.escort.aBB >= 2) return 'A';
							if (ships.escort.SS + ships.escort.SSV >= 2) return 'A';
							return 'B';
						},
					},
					'A': {
						type: 1,
						x: 164,
						y: 136,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'C',
					},
					'B': {
						type: 3,
						x: 225,
						y: 244,
						routeS: ['C','E'],
					},
					'C': {
						type: 1,
						x: 253,
						y: 135,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'D',
					},
					'D': {
						type: 2,
						x: 348,
						y: 89,
						resource: 2,
						amount: [50],
						route: 'F',
					},
					'E': {
						type: 1,
						x: 370,
						y: 283,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB >= 3) return 'F';
							if (ships.aCV >= 4) return 'F';
							if (ships.escort.CLT >= 2) return 'F';
							return 'H';
						},
					},
					'F': {
						type: 1,
						x: 458,
						y: 133,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB >= 1) return 'H';
							if (ships.CLT + ships.escort.CLT >= 2) return 'H';
							if (ships.aCV >= 3) return 'H';
							return 'J';
						},
					},
					'G': {
						type: 3,
						x: 500,
						y: 321,
						end: true,
					},
					'H': {
						type: 1,
						x: 504,
						y: 234,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'J',
					},
					'I': {
						type: 3,
						x: 558,
						y: 97,
						end: true,
					},
					'J': {
						type: 1,
						x: 616,
						y: 169,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true,
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Battle of Cornehaikara',
				fleetTypes: [0],
				bgmMap: 2032,
				bgmDN: 4,
				bgmNN: 5,
				bgmDB: 5,
				bgmNB: 5,
				bossnode: 11,
				transport: 'J',
				maphp: {
					3: { 1: 320},
					2: { 1: 200},
					1: { 1: 100},
				},
				giveLock: 2,
				checkLock: [3],
				additionalChecks: function(ships,errors) {
					if (SHIPDATA[ships.ids[0]].type != 'CL') errors.push('Flagship must be CL');
					if (ships.DD < ships.total-1) errors.push('Non-flag must be DD');
				},
				nodes: {
					'Start': {
						type: 0,
						x: 175,
						y: 176,
						routeC: function(ships) {
							var hasSendai = isShipInList(ships.ids,54) || isShipInList(ships.ids,55) || isShipInList(ships.ids,56);
							var numDDSpecial = isShipInList(ships.ids,28) + isShipInList(ships.ids,7) + isShipInList(ships.ids,20) + isShipInList(ships.ids,170);
							if (hasSendai && numDDSpecial >= 2) return 'A';
							return 'B';
						}
					},
					'A': {
						type: 3,
						x: 284,
						y: 223,
						routeC: function(ships) {
							var hasSendai = isShipInList(ships.ids,54) || isShipInList(ships.ids,55) || isShipInList(ships.ids,56);
							var numDDSpecial = isShipInList(ships.ids,28) + isShipInList(ships.ids,7) + isShipInList(ships.ids,20) + isShipInList(ships.ids,170);
							if (hasSendai && numDDSpecial >= 2) return 'D';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 304,
						y: 142,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'E'
					},
					'C': {
						type: 1,
						x: 364,
						y: 303,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'G'
					},
					'D': {
						type: 1,
						x: 365,
						y: 186,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							var hasSendai = isShipInList(ships.ids,54) || isShipInList(ships.ids,55) || isShipInList(ships.ids,56);
							var numDDSpecial = isShipInList(ships.ids,28) + isShipInList(ships.ids,7) + isShipInList(ships.ids,20) + isShipInList(ships.ids,170);
							if (hasSendai && numDDSpecial >= 4) return 'F';
							return 'E';
						}
					},
					'E': {
						type: 1,
						x: 399,
						y: 117,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'H'
					},
					'F': {
						type: 1,
						x: 476,
						y: 192,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 498,
						y: 279,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 510,
						y: 142,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							var hasSendai = isShipInList(ships.ids,54) || isShipInList(ships.ids,55) || isShipInList(ships.ids,56);
							var numDDSpecial = isShipInList(ships.ids,28) + isShipInList(ships.ids,7) + isShipInList(ships.ids,20) + isShipInList(ships.ids,170);
							if (hasSendai && numDDSpecial >= 2) return 'I';
							if (Math.random() < .5) return 'I';
							if (Math.random() < .6) return 'F';
							return 'K';
						}
					},
					'I': {
						type: 3,
						x: 546,
						y: 266,
						route: 'J'
					},
					'J': {
						type: 2,
						x: 592,
						y: 257,
						resource: 1,
						amount: [0],
						route: 'K'
					},
					'K': {
						type: 1,
						x: 619,
						y: 158,
						compDiff: {
							3: ['Hard 1'],
							2: ['Medium 1'],
							1: ['Easy 1'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Weigh anchor! Maritime transport fleet',
				fleetTypes: [3],
				bgmMap: 2032,
				bgmDN: 52,
				bgmNN: 52,
				bgmDB: 53,
				bgmNB: 53,
				bossnode: 11,
				transport: 'G',
				maphp: {
					3: { 1: 800},
					2: { 1: 500},
					1: { 1: 300},
				},
				giveLock: 2,
				checkLock: [3],
				nodes: {
					'Start': {
						type: 0,
						x: 115,
						y: 215,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 241,
						y: 143,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 243,
						y: 269,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 306,
						y: 195,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB) return 'E';
							if (ships.AV + ships.escort.AV || ships.LHA + ships.escort.LHA || ships.DD + ships.escort.DD >= 5) return 'D';
							return (Math.random() < .5)? 'D': 'E';
						}
					},
					'D': {
						type: 1,
						x: 377,
						y: 161,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 388,
						y: 256,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5'],
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 396,
						y: 320,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'E'
					},
					'G': {
						type: 2,
						x: 442,
						y: 262,
						resource: 1,
						amount: [0],
						route: 'I'
					},
					'H': {
						type: 1,
						x: 483,
						y: 179,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						routeL: { 3: 'K', 0: 'J' }
					},
					'I': {
						type: 3,
						x: 483,
						y: 252,
						route: 'H'
					},
					'J': {
						type: 3,
						x: 579,
						y: 145,
						end: true
					},
					'K': {
						type: 1,
						x: 618,
						y: 212,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					}
				}
			},
			4: {
				name: 'E-4',
				nameT: 'The Western line! Carrier task force deployment',
				fleetTypes: [1,2,3],
				bgmMap: 2030,
				bgmDN: 39,
				bgmNN: 39,
				bgmDB: 53,
				bgmNB: 53,
				bossnode: 15,
				maphp: {
					3: { 1: 680},
					2: { 1: 570},
					1: { 1: 440},
				},
				finalhp: {
					3: 130,
					2: 130,
					1: 160,
				},
				giveLock: 3,
				checkLock: [2],
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return (debuff.J && debuff.M);
				},
				nodes: {
					'Start': {
						type: 0,
						x: 625,
						y: 99,
						routeC: function(ships) {
							if (CHDATA.fleets.combined == 1) return 'A';
							return 'D';
						}
					},
					'A': {
						type: 3,
						x: 647,
						y: 234,
						route: 'B'
					},
					'B': {
						type: 1,
						x: 563,
						y: 290,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,445) || ships.CT >= 2) return 'F';
							if (isShipInList(ships.ids,460) && ships.CT) return 'F';
							return (Math.random() < .5)? 'C' : 'F';
						}
					},
					'C': {
						type: 1,
						x: 535,
						y: 207,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 512,
						y: 124,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 454,
						y: 204,
						routeS: ['F','G']
					},
					'F': {
						type: 1,
						x: 410,
						y: 312,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 399,
						y: 124,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'H'
					},
					'H': {
						type: 1,
						x: 318,
						y: 173,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,441) || isShipInList(ships.ids,442) || isShipInList(ships.ids,443)) return 'J';
							return (Math.random() < .5)? 'I' : 'J';
						}
					},
					'I': {
						type: 1,
						x: 303,
						y: 297,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 273,
						y: 97,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function(fleetsE,fleetsF) {
							if (fleetsE[0].ships[0].HP <= 0) CHDATA.event.maps[4].debuff.J = true;
						},
						route: 'K'
					},
					'K': {
						type: 3,
						x: 204,
						y: 246,
						routeS: ['M','N']
					},
					'L': {
						type: 3,
						x: 158,
						y: 116,
						end: true
					},
					'M': {
						type: 1,
						x: 122,
						y: 285,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function(fleetsE,fleetsF) {
							if (fleetsE[0].ships[0].HP <= 0) CHDATA.event.maps[4].debuff.M = true;
						},
						end: true
					},
					'N': {
						type: 1,
						x: 119,
						y: 180,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'O', 0: 'L' }
					},
					'O': {
						type: 1,
						x: 76,
						y: 112,
						subonly: true,
						debuffAmount: 20,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Overcome! Nightbattle of Vanilla Gulf!',
				fleetTypes: [0],
				bgmMap: 2032,
				bgmDN: 52,
				bgmNN: 52,
				bgmDB: 55,
				bgmNB: 55,
				bossnode: 14,
				parts: {
					1: {
						maphp: {
							3: { 1: 360},
							2: { 1: 240},
							1: { 1: 120},
						},
						transport: 'K',
					},
					2: {
						maphp: {
							3: { 1: 1060},
							2: { 1: 1000},
							1: { 1: 720},
						},
						transport: null,
					}
				},
				finalhp: {
					3: 255,
					2: 255,
					1: 255,
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					if (CHDATA.event.maps[5].part != 2) return false;
					return (debuff.imp >= 15);
				},
				additionalChecks: function(ships,errors) {
					if (SHIPDATA[ships.ids[0]].type != 'CL') errors.push('Flagship must be CL');
					if (ships.DD < 1) errors.push('Min 1 DD');
					if (ships.CL > 2) errors.push('Max 2 CL');
					if (ships.CA + ships.CAV + ships.CLT + ships.CT > 1) errors.push('Max 1 CA, CAV, CLT, or CT');
					if (ships.CL + ships.DD + ships.CA + ships.CAV + ships.CLT + ships.CT < ships.total) errors.push('Only DD, CL, CA, CAV, CLT, CT');
				},
				reward: {
					'ships': [455],
				},
				nodes: {
					'Start': {
						type: 0,
						x: 112,
						y: 193,
						route: 'A'
					},
					'A': {
						type: 3,
						x: 257,
						y: 193,
						routeS: ['B','C']
					},
					'B': {
						type: 1,
						x: 294,
						y: 287,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,43)) return 'E';
							return 'D';
						}
					},
					'C': {
						type: 3,
						x: 333,
						y: 134,
						routeC: function(ships) {
							if (isShipInList(ships.ids,43)) {
								let num = isShipInList(ships.ids,54) + isShipInList(ships.ids,459);
								if (num >= 2) return 'G';
								if (num == 1) return 'E';
							}
							return 'F';
						}
					},
					'D': {
						type: 1,
						x: 366,
						y: 320,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 384,
						y: 248,
						route: 'H'
					},
					'F': {
						type: 1,
						x: 396,
						y: 83,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,43)) return 'G';
							return 'I';
						}
					},
					'G': {
						type: 1,
						x: 459,
						y: 154,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'H': {
						type: 1,
						x: 462,
						y: 281,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						debuffGive: function(fleetsE,fleetsF) {
							if (CHDATA.event.maps[5].part != 2) return;
							let num = 0;
							for (var ship of fleetsE[0].ships) {
								if (ship.isPT && ship.HP <= 0) num++;
							}
							CHDATA.event.maps[5].debuff.imp = (CHDATA.event.maps[5].debuff.imp || 0) + num;
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 510,
						y: 117,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 512,
						y: 233,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'K': {
						type: 2,
						x: 606,
						y: 267,
						resource: 0,
						route: 'L'
					},
					'L': {
						type: 1,
						x: 651,
						y: 230,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function(fleetsE,fleetsF) {
							if (CHDATA.event.maps[5].part != 2) return;
							let num = 0;
							for (var ship of fleetsE[0].ships) {
								if (ship.isPT && ship.HP <= 0) num++;
							}
							CHDATA.event.maps[5].debuff.imp = (CHDATA.event.maps[5].debuff.imp || 0) + num;
						},
						routeL: { 3: 'N', 0: 'M' }
					},
					'M': {
						type: 3,
						x: 662,
						y: 158,
						end: true
					},
					'N': {
						type: 1,
						x: 604,
						y: 137,
						debuffAmount: 20,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						debuffGive: function(fleetsE,fleetsF) {
							if (CHDATA.event.maps[5].part != 2) return;
							let num = 0;
							for (var ship of fleetsE[0].ships) {
								if (ship.isPT && ship.HP <= 0) num++;
							}
							CHDATA.event.maps[5].debuff.imp = (CHDATA.event.maps[5].debuff.imp || 0) + num;
						},
						end: true,
						boss: true
					},
				}
			}
		}
	},
	33: {
		name: 'Winter 2016',
		date: '2016-02-10',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		bannerImg: 'http://i.imgur.com/EOmqNW3.png',
		bannerImgAlt: 'http://i.imgur.com/6VkAYeA.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcFall15,
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Preparation of "Operation Rei-Go"',
				fleetTypes: [0],
				bgmMap: 2033,
				bgmDN: 58,
				bgmNN: 58,
				bgmDB: 59,
				bgmNB: 59,
				bossnode: 10,
				maphp: {
					3: { 1: 800},
					2: { 1: 650},
					1: { 1: 550},
				},
				additionalChecks: function(ships,errors) {
					if (ships.CV || ships.BB || ships.CVB || ships.FBB) errors.push('Fleet must not contain CV(B), (F)BB');
				},
				debuffCheck: function(debuff) {
					// Add a debuff to SS Hime added in a silent update by KC devs when the event was realeased
					// Source : https://kancolle.wikia.com/wiki/Winter_2016_Event#/E-1
					// Additional 22.1 damage for SS Hime with 110/130 armor and 16 damage for the 160 armor version.
					// will activate this 12 runs later to simulate "update"
					if (!debuff) return false;
					return debuff.count >= 12;
				},
				finalhp: {
					3: 160,
					2: 130,
					1: 110,
				},
				nodes: {
					'Start': {
						type: 0,
						x: 221,
						y: 197,
						routeC: function(ships) { //random if 2+ DD without kasumi 100% A if Kasumi Flagship
							var hasKasumiAsFlagship = ships.ids[0] === 49 || ships.ids[0] === 253 || ships.ids[0] === 470 || ships.ids[0] === 464;
							if (hasKasumiAsFlagship) return 'A';
							if(ships.DD >= 2) return (Math.random() < .5)? 'A' : 'B';
							return 'B';
						},
					},
					'A': {
						type: 1,
						x: 323,
						y: 124,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2', 'Hard 3','Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						},
						route: 'E'
					},
					'B': {
						type: 1,
						x: 340,
						subonly: true,
						y: 212,
						compDiff: {
							3: ['Hard 1','Hard 2', 'Hard 3','Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4', 'Easy 5'],
						},
						route: 'F'
					},
					'C': {
						type: 3,
						x: 354,
						y: 331,
						end: true
					},
					'D': {
						type: 1,
						x: 420,
						y: 292,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						routeC: function(ships) { //Suppossed to be a LOS check (unknown values) and C is forced if >= 3CVL
							if (ships.CVL >= 3) {
								this.showLoSPlane = false;
								return 'C';
							}
							this.showLoSPlane = 'J';
							return checkELoS33(getELoS33(1,1),{ 3: 'J', 0: 'C' });
						}
					},
					'E': {
						type: 3,
						x: 451,
						y: 151,
						routeS: ['F','G']
					},
					'F': {
						type: 1,
						x: 486,
						y: 228,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'D'
					},
					'G': {
						type: 1,
						x: 545,
						y: 124,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium'],
							1: ['Easy'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 554,
						raid: true,
						y: 296,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium'],
							1: ['Easy'],
						},
						route: 'D'
					},
					'I': {
						type: 1,
						x: 611,
						y: 211,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5', 'Hard 6'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'H'
					},
					'J': {
						type: 1,
						x: 318,
						y: 283,
						subonly: true,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2'],
						},
						debuffAmount: { 1644: 22.1, 1645: 22.1, 1646: 16 },
						debuffGive: function() {
							CHDATA.event.maps[1].debuff.count = CHDATA.event.maps[1].debuff.count + 1 || 1;
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Sortie! "Operation Rei-Go"',
				fleetTypes: [0],
				bgmMap: 2033,
				bgmDN: 58,
				bgmNN: 58,
				bgmDB: 59,
				bgmNB: 59,
				bossnode: 15,
				maphp: {
					3: { 1: 3000},
					2: { 1: 2830},
					1: { 1: 2780},
				},
				finalhp: {
					3: 600,
					2: 430,
					1: 380,
				},
				startCheck: function(ships) {
					var hasKasumiAsashimoKiyoshimoAshigara = isShipInList(ships.ids, 49) &&  isShipInList(ships.ids, 425) && isShipInList(ships.ids, 410) && isShipInList(ships.ids, 64);
					var bannedFromNorthShips = ships.BB + ships.BBV + ships.FBB + ships.CV + ships.CVB + ships.CVL + ships.AO + ships.LHA;
					if ( hasKasumiAsashimoKiyoshimoAshigara && bannedFromNorthShips === 0 ) return 'Start1';
					if ( (ships.CL === 1 || ships.CL === 2) && ships.DD >= 3 && (ships.CA + ships.CAV + ships.CLT) <= 2 && bannedFromNorthShips === 0 ) return 'Start1';
					return 'Start2';
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 64,
						y: 184,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 111,
						y: 267,
						route: 'C'
					},
					'A': {
						type: 1,
						x: 142,
						y: 97,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						},
						routeC: function (ships) {
							var nbReiGoShips = isShipInList(ships.ids, 49) +  isShipInList(ships.ids, 425) + isShipInList(ships.ids, 410) + isShipInList(ships.ids, 64) + isShipInList(ships.ids, 183);
							if (nbReiGoShips >= 4) return 'E';
							if ( ships.CA === 1 && ships.CL === 1 && ships.CLT === 1 && ships.DD === 3) return 'E';
							if (ships.CA + ships.CAV >= 0) return (Math.random() < .5)? 'E' : 'B';
							return 'B';
						}
					},
					'B': {
						type: 1,
						x: 193,
						y: 172,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4', 'Easy 5'],
						},
						route: 'F'
					},
					'C': {
						type: 1,
						x: 223,
						y: 318,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4'],
						},
						routeC: function (ships) {
							var nbCVandBB = ships.CV + ships.CVB + ships.BB + ships.FBB + ships.BBV;
							if ( isShipInList(ships.ids, 131) || isShipInList(ships.ids, 143) || ships.DD < 2 || (ships.CV + ships.CVL + ships.CVB) > 1) return 'D';
							if ( isShipInList(ships.ids, 77) && isShipInList(ships.ids, 87) && nbCVandBB <= 4) return 'G';
							if ( isShipInList([ships.ids[0]],49) && nbCVandBB <= 3) return 'G';
							if ( nbCVandBB <= 2) return 'G';
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 250,
						y: 251,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						route: 'G'
					},
					'E': {
						type: 3,
						x: 255,
						y: 97,
						routeS: ['I','F']
					},
					'F': {
						type: 1,
						x: 276,
						y: 179,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy'],
						},
						route: 'H'
					},
					'G': {
						type: 1,
						x: 330,
						y: 318,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'K'
					},
					'H': {
						type: 1,
						x: 346,
						y: 235,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy'],
						},
						routeC: function (ships) { //Lack of information on wikis. What i've done : if reigo >= 4 -> J if NON reigo + kasumi flag -> J ELSE -> L
							var nbReiGoShips = isShipInList(ships.ids, 49) +  isShipInList(ships.ids, 425) + isShipInList(ships.ids, 410) + isShipInList(ships.ids, 64) + isShipInList(ships.ids, 183);
							if ( nbReiGoShips >= 4 ) return 'J';
							if ( isShipInList([ships.ids[0]],49) ) return 'J';
							return 'L';
						}
					},
					'I': {
						type: 1,
						x: 342,
						y: 98,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 398,
						y: 169,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'M'
					},
					'K': {
						type: 1,
						x: 422,
						y: 319,
						raid: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy'],
						},
						routeC: function (ships) {
							if ( (ships.SS + ships.SSV) > 0 || ships.DD < 2 ) return 'L';
							var nbCVandBB = ships.CV + ships.CVB + ships.BB + ships.FBB + ships.BBV;
							if ( isShipInList(ships.ids, 77) && isShipInList(ships.ids, 87) && nbCVandBB <= 3) return 'N';
							if ( isShipInList([ships.ids[0]],49) && nbCVandBB <= 3) return 'N';
							if ( nbCVandBB <= 2) return 'N';
							return 'L';
						}
					},
					'L': {
						type: 1,
						x: 433,
						y: 243,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'M'
					},
					'M': {
						type: 1,
						x: 498,
						y: 180,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'O'
					},
					'N': {
						type: 1,
						x: 501,
						y: 302,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
						},
						route: 'O'
					},
					'O': {
						type: 1,
						x: 546,
						y: 254,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						boss: true,
						end: true,
					},
				},
			},
			3: {
				name: 'E-3',
				nameT: 'Operation Shou-Go 4',
				fleetTypes: [1,2,3],
				bgmMap: 2033,
				bgmDN: 60,
				bgmNN: 60,
				bgmDB: 59,
				bgmNB: 59,
				bossnode: [20,19],
				parts: {
					1: {
						fleetTypes: [3],
						maphp: {
							3: { 1: 500},
							2: { 1: 400},
							1: { 1: 300},
						},
						transport: 'G',
					},
					2: {
						fleetTypes: [1,2,3],
						maphp: {
							3: { 1: 2250},
							2: { 1: 1750},
							1: { 1: 1600},
						},
						transport: null,
					}
				},
				finalhp: {
					3: 390,
					2: 380,
					1: 370,
				},
				reward: {
					'ships': [448],
				},
				startCheck: function(ships) {
					if (CHDATA.fleets.combined === 1) return 'Start2'; //CTF
					if (CHDATA.fleets.combined === 2) return 'Start3'; //STF
					if (CHDATA.fleets.combined === 3) return 'Start1'; //TCF
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 65,
						y: 236,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 236,
						y: 266,
						routeC: function (ships) {
							if (ships.escort.CLT >= 2 ||
								ships.CV >= 3 ||
								(ships.CVL + ships.escort.CVL + ships.CV) >= 4 ||
								ships.CVB >= 1) return 'E';
							return 'F';
						}
					},
					'Start3': {
						type: 0,
						x: 426,
						y: 93,
						route: 'J'
					},
					'A': {
						type: 1,
						x: 153,
						y: 197,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						route: 'B'
					},
					'B': {
						type: 1,
						x: 215,
						y: 119,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						routeC: function (ships) {
							if(ships.speed >= 10 && ships.escort.speed >= 10) return 'D';
							return 'C';
						}
					},
					'C': {
						type: 1,
						x: 286,
						y: 161,
						raid: true,
						compDiff: {
							1: ['Easy'],
							2: ['Medium'],
							3: ['Hard 1', 'Hard 2'],
						},
						route: 'D'
					},
					'D': {
						type: 1,
						x: 299,
						y: 87,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 330,
						y: 222,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 331,
						y: 310,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						route: 'H'
					},
					'G': {
						type: 2,
						x: 379,
						y: 88,
						resource: 0,
						route: 'S'
					},
					'H': {
						type: 1,
						x: 405,
						y: 244,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 464,
						y: 318,
						raid: true,
						compDiff: {
							1: ['Easy'],
							2: ['Medium 1', 'Medium 2'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						route: 'L'
					},
					'J': {
						type: 3,
						x: 493,
						y: 147,
						routeS: ['K','M'],
					},
					'K': {
						type: 1,
						x: 505,
						y: 226,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						route: 'I',
					},
					'L': {
						type: 1,
						x: 549,
						y: 276,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						compDiffF: {
							1: ['Easy 3'],
							2: ['Medium 4'],
							3: ['Hard 4'],
						},
						routeC: function (ships) { //LOS check here but unknown values
							if(ships.escort.SS + ships.escort.SSV >= 1) {
								this.showLoSPlane = false;
								return 'O';
							}
							this.showLoSPlane = 'T';
							return checkELoS33(getELoS33(1,1,true),{ 3: 'T', 0: 'O' });
						}
					},
					'M': {
						type: 1,
						x: 575,
						y: 114,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						route: 'P',
					},
					'N': {
						type: 1,
						x: 589,
						y: 217,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						routeC: function (ships) {
							if(ships.speed >= 10 && (ships.BB + ships.BBV + ships.CV + ships.CVB <= 1)) return 'T';
							return 'Q';
						}
					},
					'O': {
						type: 3,
						x: 593,
						y: 327,
						end: true,
					},
					'P': {
						type: 1,
						x: 640,
						y: 152,
						subonly: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5', 'Medium 6'],
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
						},
						routeC: function (ships) { // LOS check here ?
							if(ships.escort.speed < 10) return 'R';
							return 'N';
						}
					},
					'Q': {
						type: 1,
						x: 650,
						y: 210,
						raid: true,
						compDiff: {
							1: ['Easy'],
							2: ['Medium'],
							3: ['Hard'],
						},
						route: 'T',
					},
					'R': {
						type: 3,
						x: 654,
						y: 87,
						end: true,
					},
					'S': {
						type: 1,
						x: 405,
						y: 169,
						boss: true,
						end: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2', 'Easy 3'],
							2: ['Medium 1', 'Medium 2', 'Medium 3'],
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
						},
						compDiffF: {
							1: ['Easy F'],
							2: ['Medium F'],
							3: ['Hard F'],
						},
					},
					'T': {
						type: 1,
						x: 635,
						y: 291,
						boss: true,
						end: true,
						compDiff: {
							1: ['Easy 1', 'Easy 2'],
							2: ['Medium 1', 'Medium 2'],
							3: ['Hard 1', 'Hard 2'],
						},
						compDiffF: {
							1: ['Easy F'],
							2: ['Medium F'],
							3: ['Hard F'],
						},
					},
				}
			}
		}
	},
	34: {
		name: 'Spring 2016',
		date: '2016-05-02',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		allowLBAS: true,
		lbasSlotCount: 12,
		lbasRangeMax: true,
		bannerImg: 'http://i.imgur.com/6zdOwyN.png',
		bannerImgAlt: 'http://i.imgur.com/8Di99lM.png',
		ptImpSpecial: 1,
		transportCalc: transportCalcStandard,
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Secure the Frontline Naval Superiority!',
				fleetTypes: [1,2,3],
				bgmMap: 2034,
				bgmDN: 61,
				bgmNN: 61,
				bgmDB: 62,
				bgmNB: 62,
				bossnode: 10,
				maphp: {
					3: { 1: 450 },
					2: { 1: 450 },
					1: { 1: 440 },
				},
				finalhp: {
					3: 90,
					2: 90,
					1: 90,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 88,
						y: 143,
						route: 'B'
					},
					'A': {
						type: 1,
						x: 165,
						y: 258,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 196,
						y: 171,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.DD + ships.escort.DD >= 5) return 'D';
							return 'A';
						}
					},
					'C': {
						type: 1,
						x: 264,
						y: 301,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'E'
					},
					'D': {
						type: 1,
						x: 294,
						y: 104,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'E'
					},
					'E': {
						type: 3,
						x: 352,
						y: 217,
						routeS: ['F','G']
					},
					'F': {
						type: 1,
						x: 436,
						y: 133,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'I'
					},
					'G': {
						type: 1,
						x: 462,
						y: 235,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'H', 0: 'K' }
					},
					'H': {
						type: 1,
						x: 521,
						y: 303,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'I': {
						type: 1,
						x: 536,
						y: 103,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'J': {
						type: 1,
						x: 616,
						y: 281,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'K': {
						type: 3,
						x: 417,
						y: 319,
						end: true
					},
				}
			},
			2: {
				name: 'E-2',
				nameT: 'Land the Engineer Corps!',
				fleetTypes: [0],
				bgmMap: 2034,
				bgmDN: 61,
				bgmNN: 61,
				bgmDB: 62,
				bgmNB: 62,
				bossnode: 10,
				maphp: {
					3: { 1: 1500 },
					2: { 1: 1420 },
					1: { 1: 1370 },
				},
				finalhp: {
					3: 480,
					2: 480,
					1: 480,
				},
				giveLock: 2,
				checkLock: [1,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 89,
						y: 140,
						routeC: function(ships) {
							if (ships.aBB + ships.CV + ships.CVB) return 'B';
							if (ships.CVL > 1) return 'B'
							if (ships.DD < 2) return 'B';
							if (ships.CL < 1) return 'B';
							return 'A';
						}
					},
					'A': {
						type: 1,
						x: 173,
						y: 210,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 225,
						y: 97,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'E'
					},
					'C': {
						type: 3,
						x: 246,
						y: 290,
						routeS: ['D','E']
					},
					'D': {
						type: 1,
						x: 332,
						y: 269,
						resource: 2,
						route: 'F'
					},
					'E': {
						type: 1,
						x: 356,
						y: 166,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.CLT >= 2 && ships.CL <= 0 && ships.DD <= 1) return 'K';
							if (ships.aBB + ships.CV + ships.CVB > 1) return 'K';
							if (ships.DD == 6) return 'K';
							if (ships.speed <= 5) return 'F';
							if (ships.aCV >= 2) return 'F';
							if (ships.CL && ships.DD >= 3) return 'H';
							return 'F';
						}
					},
					'F': {
						type: 1,
						x: 422,
						y: 330,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'G'
					},
					'G': {
						type: 1,
						x: 529,
						y: 300,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'J', 0: 'L' }
					},
					'H': {
						type: 3,
						x: 537,
						y: 113,
						route: 'I'
					},
					'I': {
						type: 1,
						x: 611,
						y: 174,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'G'
					},
					'J': {
						type: 1,
						x: 446,
						y: 233,
						compDiff: {
							3: ['Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'K': {
						type: 3,
						x: 393,
						y: 88,
						end: true
					},
					'L': {
						type: 3,
						x: 640,
						y: 269,
						end: true
					},
				}
			},
			3: {
				name: 'E-3',
				nameT: 'Construct a Front-line Air Base!',
				fleetTypes: [3],
				bgmMap: 2034,
				bgmDN: 61,
				bgmNN: 61,
				bgmDB: 62,
				bgmNB: 62,
				bossnode: 11,
				transport: 'G',
				maphp: {
					3: { 1: 550 },
					2: { 1: 420 },
					1: { 1: 310 },
				},
				giveLock: 2,
				checkLock: [1,3,4],
				nodes: {
					'Start': {
						type: 0,
						x: 228,
						y: 322,
						route: 'B'
					},
					'A': {
						type: 1,
						x: 92,
						y: 161,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'B': {
						type: 3,
						x: 130,
						y: 257,
						routeC: function(ships) {
							if (ships.speed >= 10) return 'D';
							return 'A';
						}
					},
					'C': {
						type: 1,
						x: 177,
						y: 108,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2'],
						},
						routeC: function(ships) {
							if (ships.aBB >= 2) return 'E';
							return 'D';
						}
					},
					'D': {
						type: 1,
						x: 277,
						y: 218,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'F'
					},
					'E': {
						type: 1,
						x: 285,
						y: 111,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'F': {
						type: 1,
						x: 350,
						y: 299,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'G': {
						type: 2,
						x: 391,
						y: 153,
						resource: 0,
						routeC: function(ships) {
							if (ships.speed <= 5) return 'I';
							return (Math.random() < .5)? 'H' : 'J';
						}
					},
					'H': {
						type: 1,
						x: 485,
						y: 279,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'J', 0: 'L' }
					},
					'I': {
						type: 1,
						x: 497,
						y: 122,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 524,
						y: 198,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'K', 0: 'M' }
					},
					'K': {
						type: 1,
						x: 618,
						y: 233,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'L': {
						type: 3,
						x: 577,
						y: 318,
						end: true
					},
					'M': {
						type: 3,
						x: 629,
						y: 121,
						end: true
					},
				}
			},
			4: {
				name: 'E-4',
				nameT: 'Take-off! Land-based Air Force!',
				fleetTypes: [1,2],
				bgmMap: 2034,
				bgmDN: 63,
				bgmNN: 63,
				bgmDB: 67,
				bgmNB: 67,
				bossnode: 11,
				maphp: {
					3: { 1: 2100 },
					2: { 1: 2100 },
					1: { 1: 2100 },
				},
				finalhp: {
					3: 370,
					2: 370,
					1: 370,
				},
				giveLock: 1,
				checkLock: [2,3,4],
				startCheck: function() {
					if (CHDATA.fleets.combined == 1) return 'Start1';
					return 'Start2';
				},
				lbas: 1,
				nodes: {
					'Start1': {
						type: 0,
						x: 86,
						y: 221,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 463,
						y: 328,
						routeC: function(ships) {
							if (ships.aBB + ships.escort.aBB >= 3) return 'C';
							if (ships.CLT + ships.escort.CLT >= 2) return 'C';
							return 'G';
						}
					},
					'A': {
						type: 1,
						x: 180,
						y: 165,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'B'
					},
					'B': {
						type: 3,
						x: 267,
						y: 127,
						distance: 2,
						routeS: ['C','D']
					},
					'C': {
						type: 1,
						x: 372,
						y: 196,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB >= 2) return 'H';
							if (ships.CLT + ships.escort.CLT >= 3) return 'H';
							return (Math.random() < .3)? 'H' : 'E';
						}
					},
					'D': {
						type: 1,
						x: 384,
						y: 96,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'E';
							if (ships.escort.aBB) return 'E';
							return 'F';
						}						
					},
					'E': {
						type: 1,
						x: 461,
						y: 161,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'F'
					},
					'F': {
						type: 1,
						x: 515,
						y: 95,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'K', 0: 'L' }
					},
					'G': {
						type: 1,
						x: 556,
						y: 323,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'H';
							let weight = Math.max(0, ships.aBB - 1);
							return (Math.random() < .4*weight)? 'H' : 'I';
						}
					},
					'H': {
						type: 1,
						x: 565,
						y: 237,
						distance: 2,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'I'
					},
					'I': {
						type: 1,
						x: 635,
						y: 288,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'J': {
						type: 1,
						x: 679,
						y: 223,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'K', 0: 'L' }
					},
					'K': {
						type: 1,
						x: 651,
						y: 114,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'L': {
						type: 3,
						x: 581,
						y: 166,
						distance: 4,
						end: true
					},
				}
			},
			5: {
				name: 'E-5',
				nameT: 'Aerial Extermination Battle of Rabaul',
				fleetTypes: [0],
				bgmMap: 2134,
				bgmDN: 62,
				bgmNN: 62,
				bgmDB: 67,
				bgmNB: 67,
				bossnode: 13,
				maphp: {
					3: { 1: 4080 },
					2: { 1: 3960 },
					1: { 1: 3840 },
				},
				finalhp: {
					3: 660,
					2: 680,
					1: 640,
				},
				giveLock: 3,
				checkLock: [1,2,4],
				lbas: 2,
				nodes: {
					'Start': {
						type: 0,
						x: 105,
						y: 140,
						route: 'A'
					},
					'A': {
						type: 1,
						x: 216,
						y: 186,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aCV) return 'B';
							if (ships.aBB > 2) return 'B';
							if (ships.DD < 3) return 'B';
							if (ships.SS + ships.SSV) return 'B';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 267,
						y: 128,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'D'
					},
					'C': {
						type: 1,
						x: 287,
						y: 253,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.CA + ships.CLT >= 2) return 'E';
							if (ships.aBB) return 'E';
							if (ships.speed >= 10 && ships.DD >= 4) return 'G';
							if (ships.speed >= 10 && ships.DD >= 3 && ships.AV && ships.CL) return 'G';
							return 'E';
						}
					},
					'D': {
						type: 1,
						x: 338,
						y: 93,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.SS + ships.SSV) return 'H';
							if (ships.DD >= 2 && ships.aBB + ships.aCV < 4) return 'F';
							return 'H';
						}
					},
					'E': {
						type: 1,
						x: 368,
						y: 302,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'I'
					},
					'F': {
						type: 1,
						x: 421,
						y: 193,
						distance: 4,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'J'
					},
					'G': {
						type: 2,
						x: 385,
						y: 230,
						distance: 3,
						resource: 1,
						amount: [50],
						route: 'I'
					},
					'H': {
						type: 1,
						x: 429,
						y: 84,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'K'
					},
					'I': {
						type: 1,
						x: 468,
						y: 251,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[5].debuff.I = true;
							}
						},
						route: 'L'
					},
					'J': {
						type: 1,
						x: 493,
						y: 202,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'L'
					},
					'K': {
						type: 1,
						x: 534,
						y: 114,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Easy 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aBB + aCV >= 4) return 'O';
							return 'J';
						}
					},
					'L': {
						type: 1,
						x: 553,
						y: 266,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'M'
					},
					'M': {
						type: 1,
						x: 625,
						y: 292,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'N': {
						type: 3,
						x: 254,
						y: 322,
						distance: 3,
						end: true
					},
					'O': {
						type: 3,
						x: 608,
						y: 139,
						distance: 6,
						end: true
					},
				}
			},
			6: {
				name: 'E-6',
				nameT: 'Friendly anchorage Recapturing Strategy',
				fleetTypes: [1],
				bgmMap: 2134,
				bgmDN: 64,
				bgmNN: 64,
				bgmDB: 68,
				bgmNB: 68,
				bossnode: 14,
				maphp: {
					3: { 1: 5400 },
					2: { 1: 4800 },
					1: { 1: 2800 },
				},
				finalhp: {
					3: 900,
					2: 900,
					1: 800,
				},
				giveLock: 4,
				checkLock: [1,2,3],
				startCheck: function() {
					let num = 0;
					for (let ship of FLEETS1[0].ships) {
						if (ship.type == 'CV' || ship.type == 'CVB' || ship.type == 'CVL') num++;
					}
					if (num >= 4) return 'Start1';
					if (num == 3) return 'Start3';
					return 'Start2';
				},
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return (debuff.A && debuff.G && debuff.L && CHDATA.event.maps[5].debuff && CHDATA.event.maps[5].debuff.I);
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 69,
						y: 178,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 193,
						y: 319,
						route: 'D'
					},
					'Start3': {
						type: 0,
						x: 234,
						y: 86,
						route: 'E'
					},
					'A': {
						type: 1,
						x: 176,
						y: 178,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						debuffGive: function() {
							var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
							if (rank == 'S') {
								CHDATA.event.maps[6].debuff.A = true;
							}
						},
						routeC: function(ships) {
							if (ships.speed <= 5) return 'B';
							return 'C';
						}
					},
					'B': {
						type: 1,
						x: 265,
						y: 255,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'C'
					},
					'C': {
						type: 1,
						x: 276,
						y: 177,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'F'
					},
					'D': {
						type: 1,
						x: 298,
						y: 320,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'G'
					},
					'E': {
						type: 1,
						x: 354,
						y: 102,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'I'
					},
					'F': {
						type: 1,
						x: 365,
						y: 216,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'H'
					},
					'G': {
						type: 1,
						x: 416,
						y: 269,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						debuffGive: function() {
							var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
							if (rank == 'S') {
								CHDATA.event.maps[6].debuff.G = true;
							}
						},
						routeL: { 3: 'F', 0: 'O' }
					},
					'H': {
						type: 1,
						x: 446,
						y: 184,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (ships.aCV >= 4) return 'K';
							if (ships.escort.aBB) return (Math.random() < .2)? 'N' : 'K';
							return (Math.random() < .2)? 'K' : 'N';
						}
					},
					'I': {
						type: 1,
						x: 465,
						y: 116,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'K'
					},
					'J': {
						type: 1,
						x: 526,
						y: 321,
						distance: 6,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							return 'N';
						}
					},
					'K': {
						type: 1,
						x: 576,
						y: 131,
						distance: 3,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							return 'M';
						}
					},
					'L': {
						type: 1,
						x: 613,
						y: 282,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2'],
						},
						debuffGive: function() {
							var rank = (!CHDATA.temp.NBonly && !NBSELECT)? CHDATA.temp.rankDay : CHDATA.temp.rank;
							if (rank == 'S') {
								CHDATA.event.maps[6].debuff.L = true;
							}
						},
						route: 'J'
					},
					'M': {
						type: 4,
						x: 633,
						y: 195,
						distance: 4,
						resource: 1,
						routeC: function(ships) {
							if (ships.aCV <= 2) return 'N';
							if (ships.escort.aBB) return 'L';
							if (ships.CV + ships.CVB <= 2) return (Math.random() < .6)? 'N' : 'L';
							if (ships.CV + ships.CVB <= 3) return (Math.random() < .4)? 'N' : 'L';
							return (Math.random() < .2)? 'N' : 'L';
						}
					},
					'N': {
						type: 1,
						x: 514,
						y: 239,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						debuffAmount: 100,
						end: true,
						boss: true
					},
					'O': {
						type: 3,
						x: 450,
						y: 325,
						distance: 5,
						end: true
					},
					'P': {
						type: 3,
						x: 642,
						y: 102,
						distance: 4,
						end: true
					},
				}
			},
			7: {
				name: 'E-7',
				nameT: 'Beyond the Surging Sea',
				fleetTypes: [1,2,3],
				bgmMap: 2134,
				bgmDN: 64,
				bgmNN: 64,
				bgmDB: 68,
				bgmNB: 68,
				bossnode: 14,
				maphp: {
					3: { 1: 5950 },
					2: { 1: 5250 },
					1: { 1: 3850 },
				},
				finalhp: {
					3: 850,
					2: 850,
					1: 750,
				},
				startCheck: function() {
					if (CHDATA.fleets.combined == 1) return 'Start1';
					return 'Start2';
				},
				lbas: 3,
				reward: {
					ships: [440]
				},
				nodes: {
					'Start1': {
						type: 0,
						x: 91,
						y: 116,
						route: 'A'
					},
					'Start2': {
						type: 0,
						x: 125,
						y: 268,
						route: 'B'
					},
					'A': {
						type: 1,
						x: 172,
						y: 168,
						distance: 1,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'C'
					},
					'B': {
						type: 1,
						x: 218,
						y: 298,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2'],
						},
						route: 'E'
					},
					'C': {
						type: 3,
						x: 258,
						y: 189,
						distance: 2,
						routeS: ['D','F']
					},
					'D': {
						type: 1,
						x: 298,
						y: 105,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'H'
					},
					'E': {
						type: 1,
						x: 307,
						y: 263,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'G'
					},
					'F': {
						type: 1,
						x: 362,
						y: 206,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						routeC: function(ships) {
							return (Math.random() < .5)? 'H' : 'I';
						}
					},
					'G': {
						type: 1,
						x: 369,
						y: 324,
						distance: 3,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4'],
						},
						route: 'I'
					},
					'H': {
						type: 1,
						x: 406,
						y: 122,
						distance: 4,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'L'
					},
					'I': {
						type: 3,
						x: 421,
						y: 252,
						distance: 4,
						routeS: ['J','K']
					},
					'J': {
						type: 1,
						x: 496,
						y: 194,
						distance: 5,
						raid: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeC: function(ships) {
							if (isShipInList(ships.ids,445)) return 'M';
							return (Math.random() < .1)? 'M' : 'L';
						}
					},
					'K': {
						type: 1,
						x: 505,
						y: 315,
						distance: 5,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						route: 'M'
					},
					'L': {
						type: 1,
						x: 504,
						y: 94,
						distance: 5,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'N', 0: 'O' }
					},
					'M': {
						type: 1,
						x: 589,
						y: 278,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3'],
						},
						routeL: { 3: 'N', 0: 'P' }
					},
					'N': {
						type: 1,
						x: 611,
						y: 160,
						distance: 6,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2'],
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F'],
						},
						end: true,
						boss: true
					},
					'O': {
						type: 3,
						x: 595,
						y: 80,
						distance: 6,
						end: true
					},
					'P': {
						type: 3,
						x: 652,
						y: 239,
						distance: 7,
						end: true
					},

				}
			}
		}
	},
	35: {
		name: 'Summer 2016',
		date: '2016-08-12',
		diffMode: 2,
		allowDiffs: [3,2,1],
		allowFleets: [0,1,2,3],
		bannerImg: 'http://i.imgur.com/CSkq7eN.png',
		bannerImgAlt: 'http://i.imgur.com/xjkzbxs.png',
		transportCalc: transportCalcStandard,
		allowLBAS: true,
		maps: {
			1: {
				name: 'E-1',
				nameT: 'Patrol off Buntan',
				fleetTypes: [0],
				bgmMap: 2035,
				bgmDN: 70,
				bgmNN: 70,
				bgmDB: 71,
				bgmNB: 71,
				bossnode: 9,
				maphp: {
					3: { 1: 900 },
					2: { 1: 700 },
					1: { 1: 550 },
				},
				finalhp: {
					3: 180,
					2: 140,
					1: 110,
				},
				giveLock: 1,
				checkLock: [2,3],
				additionalChecks: function(ships,errors) {
					if (ships.CV || ships.BB || ships.CVB || ships.BBV ) errors.push('No CV(B) or BB(V) allowed.');
				},
				nodes: {
					'Start' : {
						type: 0,
						x: 613,
						y: 97,
						routeC: function(ships){
							if (ships.DD < 2 || (ships.DD + ships.CL <= 2) || ships.CVL >= 3) return 'A';
							else return 'B';
						}
					},
					'A' : {
						type: 1,
						x: 675,
						y: 231,
						compDiff:{
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2','Easy 3','Easy 4']
						},
						route : 'C',
					},
					'B' : {
						type: 1,
						x: 581,
						y: 191,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1', 'Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1', 'Easy 2', 'Easy 3','Easy 4','Easy 5']
						},
						routeC: function(ships){
							if ((ships.FBB && ships.FBB + ships.CVL >= 2) || 6 - (ships.DD + ships.CL + ships.CLT + ships.CT) >= 2 ) return 'C';
							else if (ships.speed >= 10 && (ships.FBB == 0) && ships.CL) return 'D';
							else return 'E';
						}
					},
					'C' : {
						type: 1,
						x: 593,
						y: 311,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4', 'Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3']
						},
						route : 'F',
					},
					'D' : {
						type: 3,
						x: 518,
						y: 262,
						route: 'F',
					},
					'E' : {
						type: 1,
						x: 464,
						y: 190,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1', 'Easy 2','Easy 3','Easy 4']
						},
						route : 'F',
					},
					'F' : {
						type: 1,
						x: 414,
						y: 304,
						subonly: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1', 'Medium 2', 'Medium 3','Medium 4','Medium 5'],
							1: ['Easy 1', 'Easy 2','Easy 3','Easy 4']
						},
						route : 'G',
					},
					'G' : {
						type: 1,
						x: 284,
						y: 333,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3', 'Hard 4'],
							2: ['Medium 1', 'Medium 2', 'Medium 3', 'Medium 4', 'Medium 5'],
							1: ['Easy 1', 'Easy 2', 'Easy 3', 'Easy 4']
						},
						routeL : {3:"I",0:"H"},
					},
					'H': {
						type: 3,
						x: 218,
						y: 247,
						end: true,
					},
					'I': {
						type: 1,
						x: 170,
						y: 310,
						subonly: true,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
						end: true,
					},
				},
			},
			2: {
				name: 'E-2',
				nameT: 'The Second Battle of Endau',
				fleetTypes: [0],
				bgmMap: 2035,
				bgmDN: 71,
				bgmNN: 71,
				bgmDB: 72,
				bgmNB: 72,
				bossnode: 13,
				transport: 'J',
				maphp: {
					3: { 1: 400},
					2: { 1: 340},
					1: { 1: 280},
				},
				lbas: 1,
				giveLock: 2,
				checkLock: [1,3],
				nodes:{
					'Start':{
						type: 0,
						x: 546,
						y: 79,
						routeC: function(ships){
							const hasSendai = isShipInList(ships.ids,54)
							let hasHistoricalFubuki = false;
							[9,10,32].forEach( mid => {
								if (isShipInList(ships.ids,mid)) { hasHistoricalFubuki = true; }
							});
							const CAVflag = (hasSendai && hasHistoricalFubuki) || (ships.AV);
							if (ships.aBB || ships.aCV) return 'C';
							// jesus christ
							else if ((ships.DD > 2 && ships.total > 3) && !(ships.CLT && ships.CAV) && (ships.CAV ? CAVflag : true ) 
								&& (ships.AV + ships.CLT < 3) && (ships.DD + ships.CL * 2 >= 4) && (ships.AV < 2)
								&& (ships.CLT + ships.CL < 3)) return 'F';
							else return 'C';
						},
					},
					'A': {
						type: 1,
						x: 679,
						y: 201,
						distance: 2,
						route: 'B',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'B':{
						type: 4,
						x: 635,
						y: 263,
						distance: 3,
						route: 'E',
						resource: 1,
					},
					'C':{
						type: 3,
						x: 613,
						y: 137,
						distance: 1,
						routeS: ['D','A'],
					},
					'D': {
						type: 1,
						x: 587,
						y: 219,
						distance: 2,
						route: 'E',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'E': {
						type: 1,
						x: 565,
						y: 299,
						distance: 3,
						subonly: true,
						route: 'G',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5']
						},
					},
					'F': {
						type: 1,
						x: 520,
						y: 162,
						distance: 1,
						subonly: true,
						route: 'G',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5']
						},
					},
					'G': {
						type: 1,
						x: 495,
						y: 232,
						distance: 2,
						route: 'H',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4']
						},
					},
					'H': {
						type: 1,
						x: 419,
						y: 167,
						raid: true,
						distance: 3,
						route: 'I',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'I': {
						type: 1,
						x: 340,
						y: 194,
						distance: 4,
						route: 'J',
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						routeL: {3:"J",0:"L"},
					},
					"J": {
						type: 2,
						x: 313,
						y: 281,
						distance: 5,
						resource: 0,
						routeL: {3:"M",0:"0"},
					},
					"K": {
						type: 3,
						x: 403,
						y: 311,
						distance: 6,
						end: true
					},
					"L": {
						type: 3,
						x: 275,
						y: 122,
						distance: 5,
						end: true
					},
					"M": {
						type: 1,
						x: 401,
						y: 251,
						distance: 6,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1','Hard 2'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
					},
				},
				
			},
			3: {
				name: 'E-3',
				nameT: 'The Second Naval Battle of Malaya',
				fleetTypes: [1,2],
				bgmMap: 2035,
				bgmDN: 71,
				bgmNN: 71,
				bgmDB: 72,
				bgmNB: 72,
				bossnode: 10,
				maphp: {
					3: { 1: 4200 },
					2: { 1: 3600 },
					1: { 1: 3000 },
				},
				finalhp: {
					3: 644,
					2: 544,
					1: 444,
				},
				lbas: 2,
				giveLock: 3,
				checkLock: [1,2],
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					return (debuff.A && debuff.D);
				},
				nodes:{
					'Start':{
						type: 0,
						x: 656,
						y: 83,
						route: 'B',
					},
					'A':{
						type: 1,
						x: 658,
						y: 242,
						distance: 2,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy']
						},
						route: 'C',
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[3].debuff.A = true;
							}
						},
					},
					'B':{
						type: 1,
						x: 641,
						y: 162,
						distance: 1,
						subonly: true,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3','Easy 4','Easy 5']
						},
						routeC: function(ships){
							var historicalCount = 0;
							var historicalList = [78,79,124,125,70,120,69,9,10,32,23,113];
							historicalList.forEach(id => {
								if (isShipInList(ships.ids,id)) historicalCount++;
								if (isShipInList(ships.escort.ids,id)) historicalCount++;
							});
							if (CHDATA.fleets.combined == 1 || historicalCount > 6) return 'C';
							else if (ships.speed <= 5) return 'A';
							else return 'C';
						},
					},
					'C':{
						type: 1,
						x: 583,
						y: 231,
						distance: 2,
						compDiff: {
							3: ['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						routeC: function(ships){
							var historicalCount = 0;
							var historicalList = [78,79,124,125,70,120,69,9,10,32,23,113];
							historicalList.forEach(id => {
								if (isShipInList(ships.ids,id)) historicalCount++;
								if (isShipInList(ships.escort.ids,id)) historicalCount++;
							});
							if (historicalCount > 6) return 'G'
							else if (historicalCount > 2 && isShipInList(ships.ids,78) && isShipInList(ships.ids,79)) return 'E';
							else return 'D';
						},
					},
					'D':{
						type: 1,
						x: 557,
						y: 295,
						distance: 3,
						raid: true,
						compDiff: {
							3: ['Hard'],
							2: ['Medium'],
							1: ['Easy']
						},
						routeC: function(ships){
							if (isShipInList(ships.ids,460)) return 'G';
							else if (isShipInList(ships.ids,131) && isShipInList(ships.ids,143) && isShipInList(ships.escorts.ids,171)) 
								{ return 'F'; }
							else if (ships.CV + ships.CVB == 4) return 'F';
							else return 'G';
						},
						debuffGive: function() {
							if (CHDATA.temp.rank == 'S') {
								CHDATA.event.maps[3].debuff.D = true;
							}
						},
					},
					'E':{
						type: 4,
						resource: 1,
						x: 538,
						y: 149,
						distance: 3,
						route: 'G',
					},
					'F':{
						type: 4,
						resource: 1,
						x: 501,
						y: 331,
						distance: 4,
						route: 'G',
					},
					'G' : {
						type: 1,
						x: 471,
						y: 202,
						distance: 3,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						routeL : {3:"H",0:"I"},
					},
					'H' : {
						type: 1,
						x: 439,
						y: 275,
						distance: 4,
						compDiff: {
							3: ['Hard 1', 'Hard 2', 'Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						route : "J",
						debuffAmount: { 1696: 23, 1697: 23, 1698: 23 },
					},
					'I':{
						type: 3,
						x: 374,
						y: 149,
						distance: 4,
						end: true,
					},
					'J':{
						type: 1,
						x: 370,
						y: 340,
						distance: 5,
						end: true,
						boss: true,
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
					},
				},
			},
			4:{
				name: 'E-4',
				nameT: 'Night Battle of Malacca Strait',
				fleetTypes: [1,2,3],
				bgmMap: 2035,
				bgmDN: 72,
				bgmNN: 72,
				bgmDB: 73,
				bgmNB: 73,
				startCheck: function(){
					if (CHDATA.fleets.combined == 1) return 'Start1';
					else return 'Start2';
				},
				bossnode: 17,
				maphp: {
					3: { 1: 3430 },
					2: { 1: 3010 },
					1: { 1: 2590 },
				},
				finalhp: {
					3: 200,
					2: 200,
					1: 200,
				},
				lbas: 3,
				debuffCheck: function(debuff) {
					if (!debuff) return false;
					let debuffCount = 0;
					for (const counter in debuff){
						debuffCount++;
					}
					return debuffCount >= 4;
				},
				reward: {
					'ships': [439]
				},
				nodes:{
					'Start1':{
						type: 0,
						x: 659,
						y: 112,
						route: 'B',
					},
					'Start2':{
						type: 0,
						x: 690,
						y: 238,
						route: 'A',
					},
					'A':{
						type: 1,
						x: 623,
						y: 275,
						distance: 1,
						raid: true,
						route: 'C',
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'B':{
						type: 3,
						x: 601,
						y: 160,
						distance: 1,
						routeS: ['E','D'],
					},
					'C':{
						type: 1,
						x: 575,
						y: 319,
						distance: 2,
						routeR: {'F':.5,'G':.5},
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffGive: function(fleetsE) {
							var ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if (ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[4].debuff.C = true;
						},
					},
					'D':{
						type: 1,
						x: 563,
						y: 227,
						distance: 2,
						route: "F",
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffGive: function(fleetsE) {
							var ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if (ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[4].debuff.D = true;
						},
					},
					'E':{
						type: 4,
						resource: 1,
						x: 527,
						y: 158,
						distance: 2,
						route: 'H',
					},
					'F':{
						type: 1,
						x: 526,
						y: 277,
						distance: 3,
						subonly: true,
						route: 'I',
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3','Hard 4','Hard 5','Hard 6'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4','Medium 5','Medium 6'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'G':{
						type: 1,
						x: 513,
						y: 338,
						raid: true,
						distance: 3,
						route: 'I',
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2']
						},
					},
					'H':{
						type: 1,
						x: 484,
						y: 225,
						distance: 3,
						route: "I",
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffGive: function(fleetsE) {
							var ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if (ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[4].debuff.H = true;
						},
					},
					'I':{
						type: 1,
						x: 438,
						y: 312,
						distance: 4,
						route: "J",
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffGive: function(fleetsE) {
							var ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if (ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[4].debuff.I = true;
						},
						debuffAmount: 35,
					},
					'J':{
						type: 3,
						x: 393,
						y: 272,
						distance: 5,
						route: "K",
					},
					'K':{
						type: 1,
						x: 350,
						y: 173,
						distance: 6,
						night: true,
						route: "L",
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
						debuffGive: function(fleetsE) {
							var ships = fleetsE[0].ships;
							let found = true;
							for (var i=0; i<ships.length; i++) {
								if (ships[i].HP > 0) found = false;
							}
							if (found) CHDATA.event.maps[4].debuff.K = true;
						},
						debuffAmount: { 1696: 23, 1697: 23, 1698: 23 },
					},
					'L':{
						type: 1,
						x: 274,
						y: 94,
						raid: true,
						distance: 7,
						routeC: function(ships){
							if (CHDATA.fleets.combined == 1){
								if (ships.SSV || ships.AO) return 'N';
								if (isShipInList(ships.ids,78) && isShipInList(ships.ids,79) && ships.CV + ships.CVB <= 2) return 'M';
								if (isShipInList(ships.escort.ids,171)) return 'N';
								if (ships.CLT > 2) return 'N';
								if (isShipInList(ships.escort.ids,69) && ships.CV + ships.CVB <= 2) return 'M';
								if (ships.CLT > 1) return 'N';
							}
							return 'M';
						},
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'M':{
						type: 1,
						x: 208,
						y: 190,
						raid: true,
						distance: 8,
						routeL: { 3:'Q', 0:'P' },
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3'],
							2: ['Medium 1','Medium 2','Medium 3'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'N':{
						type: 1,
						x: 195,
						y: 106,
						distance: 8,
						subonly: true,
						routeR: {'M':.75,'O':.25},
						compDiff:{
							3:['Hard 1','Hard 2','Hard 3','Hard 4'],
							2: ['Medium 1','Medium 2','Medium 3','Medium 4'],
							1: ['Easy 1','Easy 2','Easy 3']
						},
					},
					'O':{
						type: 4,
						resource: 1,
						x: 146,
						y: 152,
						distance: 9,
						route: 'M',
					},
					'P':{
						type: 3,
						x: 214,
						y: 297,
						distance: 9,
						end: true
					},
					'Q':{
						type: 1,
						x: 119,
						y: 238,
						distance: 9,
						end: true,
						boss: true,
						debuffAmount: { 1696: 23, 1697: 23, 1698: 23, 1705: 30, 1706: 30, 1707: 30 },
						compDiff: {
							3: ['Hard 1', 'Hard 2'],
							2: ['Medium 1', 'Medium 2'],
							1: ['Easy 1', 'Easy 2']
						},
						compDiffF: {
							3: ['Hard F'],
							2: ['Medium F'],
							1: ['Easy F']
						},
					},
				},
			},
		}
	}
}

function getMapHP(worldnum,mapnum,diff,part) {
	if (!CHDATA.event) return undefined;
	if (!diff) return undefined;
	var mdata;
	if (part) {
		mdata = MAPDATA[worldnum].maps[mapnum].parts[part];
	} else {
		mdata = MAPDATA[worldnum].maps[mapnum];
	}
	var hqtiers = Object.keys(mdata.maphp[diff]);
	var hqtier = 0;
	for (var i=0; i<hqtiers.length; i++) {
		if (CHDATA.player.level >= hqtiers[i] && hqtier < hqtiers[i]) hqtier = hqtiers[i];
	}
	return mdata.maphp[diff][hqtier];
}
function isShipInList(ships,basemid) {
	var ship = SHIPDATA[basemid];
	while(ship) {
		if (ships.indexOf(basemid)!=-1) return true;
		if (!ship.next) break;
		basemid = ship.next;
		ship = SHIPDATA[ship.next];
	}
	return false;
}
function mapChangePart(worldnum,mapnum,part) {
	if (!MAPDATA[worldnum].maps[mapnum].parts) return;
	for (var key in MAPDATA[worldnum].maps[mapnum].parts[part]) {
		MAPDATA[worldnum].maps[mapnum][key] = MAPDATA[worldnum].maps[mapnum].parts[part][key];
	}
}

function transportCalcStandard(ships,rank) {
	rank = rank || 'S';
	let tp = 0;
	const tpObj = {
		"DD": 5,
		"CL": 2,
		"CT": 6,
		"CAV": 4,
		"BBV": 7,
		"AV": 9,
		"LHA": 12,
		"AO": 15,
		"AS": 7,
	};
	for (let ship of ships) {
		if (!ship) continue;
		const stype = SHIPDATA[ship.masterId].type;
		if (tpObj[stype]) tp += tpObj[stype];
		for (let item of ship.items) {
			if (item <= 0) continue;
			let eq = CHDATA.gears['x'+item];
			let eqd = EQDATA[eq.masterId];
			if (eqd.type == DRUM) tp += 5;
			if (eqd.type == LANDINGCRAFT) tp += 8;
			if (eqd.type == RATION) tp += 1;
			if (eqd.type == LANDINGTANK) tp += 2;
		}
	}
	tp = Math.floor(tp);
	if (rank == 'A') tp *= 0.7;
	if (rank != 'S' && rank != 'A') return 0;
	return Math.floor(tp);
}

function transportCalcFall15(ships,rank) {
	rank = rank || 'S';
	let tp = 0;
	for (let ship of ships) {
		if (!ship) continue;
		tp += 3;
		for (let item of ship.items) {
			if (item <= 0) continue;
			let eq = CHDATA.gears['x'+item];
			let eqd = EQDATA[eq.masterId];
			if (eqd.type == DRUM) tp += 3.5;
			if (eqd.type == LANDINGCRAFT) tp += 5.5;
		}
	}
	if (rank == 'S') tp *= 1.5;
	if (rank != 'S' && rank != 'A') return 0;
	return Math.floor(tp);
}