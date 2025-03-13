import plotly.graph_objects as go
nameList = ["Do'ður","Li'ðin","Té'mur","Ha'din","Kwe'lin","Ne'tur","El'dur","Va'din","Yó'dur","Lú'din","Bra'ður","Fye'lur","Ke'nur","Pa'tin","Dó'rin","Ga'ldin","Stré'ður","Fó'rmur","Fri'ðin","Fur'lin","Fel'kilur","Há'lin","Gól'gemin","Efki'min","Ski'mzyur","Dyu'r","Op'fin","On'legur","Ekspre'ŋur","Stref'nur","Lak'bin","Ko'gur","Ra'vin","Braé'nur","Fre'kur","Per'lin","Kuf'nur","Poé'kin","Sér'ilur","Up'goðin","Do'lin","Yór'din","Śódur","O'ditur","Pú'kin","Grán'dur","Skop'kin","Sþi'nur","Ark'tin","Bi'sur","Spriŋ'ur","Kart'lin","Nok'vur","Skur'ðin","Me'cur","Ris'tulin","Mó'lin","Do'lita"]
descriptionList = ["God of Death","Goddess of Life","God of Time","Writer of Fate","Weaver of Fate","Trimmer of Fate","God of Energy","Goddess of Water","God of Earth","Goddess of Air","God of Fire","God of Mountains","God of Canyons & Cliffs","Goddess of Plants","Goddess of Creatures","Goddess of Magic","God of War","God of Warmth","Goddess of Peace","Goddess of Travel","God of Volcanoes","Goddess of Caves","Goddess of Alchemy","Goddess of Chemistry","God of Monsters","God of Animals","Goddess of Invention","God of Construction","God of Explosives","God of Strategy","Goddess of Healing","God of Art","Goddess of Lava","God of Burning","God of Fear","Goddess of Precious Gems","God of Artifacts","Goddess of Potions","God of Acids","Goddess of Discovery","Goddess of Air Animals","Goddess of Land Animals","God of Sea Animals","God of Undead","Goddess of Demons","God of Intelligence","Goddess of Creativity","God of Carpentry","Goddess of Architecture","God of Firearms","God of Bombs","Goddess of Cartography","God of Precision","Goddess of Surgery","God of Medicine","Goddess of Carving","Goddess of Paint",""]
fig = go.Figure(go.Sankey(
    arrangement='snap',
    orientation='h',
    node=dict(
        label=nameList,
        y=[0.787,0.365,0.966,0.933,0.966,1,0.146,0.558,0.725,0.85,0.391,0.683,0.766,0.850,0.075,0.216,0.35,0.433,0.516,0.6,0.65,0.717,0.817,0.883,0.117,0.033,0.183,0.250,0.317,0.383,0.483,0.550,0.666,0.633,0.733,0.7,0.833,0.8,0.866,0.9,0.001,0.033,0.066,0.1,0.133,0.166,0.2,0.233,0.266,0.3,0.333,0.366,0.4,0.466,0.5,0.533,0.566,0.706],
        x=[0.2,0.2,0.2,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.6,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        customdata=descriptionList,
        hovertemplate='<b>%{label}</b><br><i>%{customdata}</i><extra></extra>',
        align='justify'
    ),
    link=dict(
        source=[57,57,57,0, 8,11,20,20,11,21,21, 8, 9,13,13, 0,22,22,23,23, 1, 1, 1, 6, 6,14,14,24,24,25,25,25,15,15,26,26,27,27,10,10,16,16,28,28,29,29, 7, 7,18,18,30,30,31,31, 2, 2, 2],
        target=[0, 1, 2, 8,11,20,32,33,21,34,35,12,13,22,23, 9,36,37,38,39, 6, 7,10,14,15,24,25,43,44,40,41,42,26,27,45,46,47,48,16,17,28,29,49,50,51,52,18,19,30,31,53,54,55,56, 3, 4, 5],
        value= [9,19, 3, 5, 4, 2, 1, 1, 2, 1, 1, 1, 4, 2, 2, 4, 1, 1, 1, 1, 9, 5, 5, 5, 4, 2, 3, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 4, 1, 2, 2, 1, 1, 1, 1, 4, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
    )
))
fig.show()
fig.write_html('worldbuilding/fantasy/mythology/plotly.html')
