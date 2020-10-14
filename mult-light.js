Hooks.on("init", () => {
    const old_drawColorationContainer = LightingLayer.prototype._drawColorationContainer;
    LightingLayer.prototype._drawColorationContainer = function () {
        const container = old_drawColorationContainer.call(this, arguments);
        container.filter.blendMode = PIXI.BLEND_MODES.MULTIPLY;
        return container;
    }
});