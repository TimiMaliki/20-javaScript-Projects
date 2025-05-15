const btn = document.querySelector('.btn')

btn.addEventListener('click' , ()=> {
    const colorHexCodes = [
        // Reds
        "#FF0000", "#FF5733", "#E74C3C", "#C0392B", "#FF3333", "#FF5A5A", "#FF8080", "#FF9999", "#FFB3B3", "#FFCCCC",
        "#FFE6E6", "#990000", "#CC0000", "#FF1A1A", "#FF4D4D", "#FF7F7F", "#FFA6A6", "#FFD1D1", "#800000", "#B30000",
        
        // Oranges
        "#FFA500", "#FF8C00", "#FF7F50", "#FF6347", "#FF4500", "#FF9933", "#FFA07A", "#FFB366", "#FFC299", "#FFD9B3",
        "#FFE0CC", "#CC6600", "#E67300", "#FF8000", "#FF9933", "#FFB366", "#FFCC99", "#FFE6CC", "#994C00", "#B35900",
        
        // Yellows
        "#FFFF00", "#FFD700", "#FFCC00", "#FFDF00", "#FFEE00", "#FFFACD", "#FFF68F", "#FFF44F", "#FFF200", "#FFEB3B",
        "#FFE600", "#FFD54F", "#FFC107", "#FFB300", "#FFA000", "#FF8F00", "#FF6F00", "#FFE0B2", "#FFCC80", "#FFB74D",
        
        // Greens
        "#00FF00", "#32CD32", "#2ECC71", "#27AE60", "#228B22", "#008000", "#006400", "#00FF7F", "#00FA9A", "#90EE90",
        "#98FB98", "#7CFC00", "#7FFF00", "#ADFF2F", "#9ACD32", "#556B2F", "#6B8E23", "#808000", "#BDB76B", "#F0E68C",
        
        // Blues
        "#0000FF", "#1E90FF", "#4169E1", "#000080", "#00008B", "#0000CD", "#1A237E", "#1565C0", "#1976D2", "#2196F3",
        "#03A9F4", "#00BFFF", "#87CEEB", "#87CEFA", "#4682B4", "#5F9EA0", "#6495ED", "#7B68EE", "#6A5ACD", "#483D8B",
        
        // Purples
        "#800080", "#9932CC", "#8A2BE2", "#9370DB", "#BA55D3", "#DA70D6", "#D8BFD8", "#DDA0DD", "#EE82EE", "#FF00FF",
        "#FF1493", "#C71585", "#DB7093", "#FF69B4", "#FFB6C1", "#FFC0CB", "#E6E6FA", "#E0B0FF", "#CC99FF", "#B399FF",
        
        // Pinks
        "#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#DB7093", "#C71585", "#FF9FF0", "#FF7FDF", "#FF5FCF", "#FF3FBF",
        "#FF1FAF", "#FF009F", "#FF008F", "#FF007F", "#FF006F", "#FF005F", "#FF004F", "#FF003F", "#FF002F", "#FF001F",
        
        // Browns
        "#A52A2A", "#8B4513", "#D2691E", "#CD853F", "#F4A460", "#DEB887", "#D2B48C", "#BC8F8F", "#A0522D", "#8B0000",
        "#800000", "#654321", "#5D4037", "#4E342E", "#3E2723", "#D7CCC8", "#BCAAA4", "#A1887F", "#8D6E63", "#6D4C41",
        
        // Grays
        "#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#DCDCDC", "#E5E5E5", "#F5F5F5", "#FFFFFF", "#000000", "#696969",
        "#778899", "#708090", "#2F4F4F", "#36454F", "#4B4B4B", "#5D5D5D", "#6E6E6E", "#7F7F7F", "#8F8F8F", "#9E9E9E",
        
        // Teals/Cyans
        "#008080", "#00CED1", "#20B2AA", "#40E0D0", "#48D1CC", "#00FFFF", "#00FFFF", "#00BFFF", "#00CED1", "#008B8B",
        "#5F9EA0", "#4682B4", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4", "#00ACC1", "#0097A7", "#00838F",
        
        // Additional Colors
        "#FFD700", "#FFDF00", "#FFEC00", "#FFF700", "#FFFA00", "#FFFB00", "#FFFC00", "#FFFD00", "#FFFE00", "#FFFF00",
        "#F5F5DC", "#FAEBD7", "#F0FFF0", "#F8F8FF", "#F5FFFA", "#FFF5EE", "#F5F5F5", "#FAFAFA", "#F0F0F0", "#E0E0E0",
        "#FFA07A", "#FF8C69", "#FF7F50", "#FF7256", "#FF6347", "#FF4500", "#FF3E00", "#FF2D00", "#FF1C00", "#FF0000",
        "#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#DA70D6", "#BA55D3", "#9370DB", "#8A2BE2", "#9932CC", "#9400D3",
        "#8B0000", "#800000", "#B22222", "#DC143C", "#FF0000", "#FF6347", "#FF7F50", "#FF8C00", "#FFA500", "#FFD700",
        "#006400", "#008000", "#228B22", "#2E8B57", "#3CB371", "#00FA9A", "#00FF7F", "#7CFC00", "#7FFF00", "#ADFF2F",
        "#000080", "#00008B", "#0000CD", "#0000FF", "#1E90FF", "#4169E1", "#4682B4", "#5F9EA0", "#6495ED", "#6A5ACD",
        "#4B0082", "#483D8B", "#6A5ACD", "#7B68EE", "#9370DB", "#8A2BE2", "#9932CC", "#9400D3", "#8B008B", "#800080",
        "#A52A2A", "#B22222", "#CD5C5C", "#DC143C", "#FF0000", "#FF6347", "#FF7F50", "#FF8C00", "#FFA500", "#FFD700",
        "#556B2F", "#6B8E23", "#808000", "#BDB76B", "#EEE8AA", "#F0E68C", "#FFD700", "#FFDF00", "#FFEC00", "#FFF700",
        "#8B4513", "#A0522D", "#D2691E", "#CD853F", "#F4A460", "#DEB887", "#D2B48C", "#BC8F8F", "#F5DEB3", "#FFE4B5",
        "#708090", "#778899", "#B0C4DE", "#E6E6FA", "#F8F8FF", "#F0F8FF", "#F5F5F5", "#FAFAFA", "#F0F0F0", "#E0E0E0",
        "#FF00FF", "#FF33FF", "#FF66FF", "#FF99FF", "#FFCCFF", "#FFFFFF", "#FFD700", "#FFDF00", "#FFEC00", "#FFF700",
        "#00FF00", "#33FF33", "#66FF66", "#99FF99", "#CCFFCC", "#00FFFF", "#33FFFF", "#66FFFF", "#99FFFF", "#CCFFFF",
        "#0000FF", "#3333FF", "#6666FF", "#9999FF", "#CCCCFF", "#000000", "#333333", "#666666", "#999999", "#CCCCCC",
        "#FF0000", "#FF3333", "#FF6666", "#FF9999", "#FFCCCC", "#800000", "#803333", "#806666", "#809999", "#80CCCC",
        "#008000", "#338033", "#668066", "#999999", "#CCCCCC", "#000080", "#333380", "#666680", "#999980", "#CCCC80",
        "#800080", "#803380", "#806680", "#809980", "#80CC80", "#008080", "#338080", "#668080", "#998080", "#CC8080"
      ];

      const randomColors = Math.floor(Math.random() * colorHexCodes.length)
       const colorPicked = colorHexCodes[randomColors]

       const backgroundColor = document.querySelector('.product ')
       backgroundColor.style.backgroundColor = colorPicked
      console.log(colorPicked)
})

