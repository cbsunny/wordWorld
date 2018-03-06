SearchX.Pool = SearchX.Pool || {}

SearchX.Pool.meshs = new Hashtable();

SearchX.Pool.geomertries = new Hashtable();

SearchX.Pool.materials = new Hashtable();

SearchX.Pool.texts = [
    ["crew","chew","咀嚼"]
];

// 定义Geomerey
SearchX.Pool.getGeometry = function (width) {
    var geomerey = this.geomertries.get(width);
    if (geomerey) {
        return geomerey;
    }
    geomerey = new THREE.BoxGeometry(width, width, width);
    this.geomertries.put(width, geomerey);
    console.log("geomertries.length:" + this.geomertries.size())
    return geomerey;
}

// 定义Material
SearchX.Pool.getMaterial = function (text, background, borderColor, borderWidth, width) {
    var str = text + "<>" + background + "<>" + borderColor + "<>" + borderWidth + "<>" + width;
    var material = this.materials.get(str);
    if (material) {
        return material;
    }
    var dynamicTexture = new THREEx.DynamicTexture(width, width);
    dynamicTexture.context.font = "bold " + (0.4 * width) + "px 'Cantabile'";
    dynamicTexture.clearWithBorder(background, borderColor, borderWidth);
    dynamicTexture.drawTextCooked(text, {
        lineHeight: 0.5,
        align: "center",
        fillStyle: "black"

    });

    material = new THREE.MeshBasicMaterial({
        map: dynamicTexture.texture
    });
    this.materials.put(str, material);
    return material;

}

