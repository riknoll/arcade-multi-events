//% color=#5431ad
//% block="Multi Events"
namespace multiEvents {
    //% blockId=multi_events_onCreated
    //% block="on created $sprite of kind $kinds"
    //% draggableParameters="reporter"
    //% kinds.shadow=multi_events_spriteKinds
    //% help=sprites/on-created
    //% weight=100
    //% blockGap=8
    //% group=Global
    export function onCreated(kinds: number[], handler: (sprite: Sprite) => void): void {
        for (const kind of kinds) {
            sprites.onCreated(kind, handler);
        }
    }

    //% blockId=multi_events_onDestroyed
    //% block="on destroyed $sprite of kind $kinds"
    //% draggableParameters="reporter"
    //% kinds.shadow=multi_events_spriteKinds
    //% help=sprites/on-destroyed
    //% weight=90
    //% group=Global
    export function onDestroyed(kinds: number[], handler: (sprite: Sprite) => void): void {
        for (const kind of kinds) {
            sprites.onDestroyed(kind, handler);
        }
    }

    //% blockId=multi_events_onOverlap
    //% block="on $sprite of kind $kinds overlaps $otherSprite of kind $otherKinds"
    //% draggableParameters="reporter"
    //% kinds.shadow=multi_events_spriteKinds
    //% otherKinds.shadow=multi_events_spriteKinds
    //% help=sprites/on-overlap
    //% weight=80
    //% group=Global
    export function onOverlap(kinds: number[], otherKinds: number[], handler: (sprite: Sprite, otherSprite: Sprite) => void) {
        for (const kind of kinds) {
            for (const otherKind of kinds) {
                sprites.onOverlap(kind, otherKind, handler);
            }
        }
    }

    //% blockId=multi_events_onOverlapTile
    //% block="on $sprite of kind $kinds overlaps $tiles at $location"
    //% draggableParameters="reporter"
    //% kinds.shadow=multi_events_spriteKinds
    //% tiles.shadow=multi_events_tiles
    //% help=scene/on-overlap-tile
    //% weight=70
    //% group=Global
    export function onOverlapTile(kinds: number[], tiles: Image[], handler: (sprite: Sprite, location: tiles.Location) => void) {
        for (const kind of kinds) {
            for (const tile of tiles) {
                scene.onOverlapTile(kind, tile, handler);
            }
        }
    }

    //% blockId=multi_events_onHitWall
    //% block="on $sprite of kind $kinds hits wall at $location"
    //% draggableParameters="reporter"
    //% kinds.shadow=multi_events_spriteKinds
    //% help=scene/on-hit-wall
    //% weight=60
    //% group=Global
    export function onHitWall(kinds: number[], handler: (sprite: Sprite, location: tiles.Location) => void) {
        for (const kind of kinds) {
            scene.onHitWall(kind, handler);
        }
    }

    //% blockId=multi_events_onCreatedLocal
    //% block="on created $sprite of kind $kinds"
    //% draggableParameters="reporter"
    //% kinds.shadow=multi_events_spriteKinds
    //% help=sprites/on-created
    //% weight=100
    //% blockGap=8
    //% group=Local
    //% handlerStatement=1
    export function onCreatedLocal(kinds: number[], handler: (sprite: Sprite) => void): void {
        onCreated(kinds, handler);
    }

    //% blockId=multi_events_onDestroyedLocal
    //% block="on destroyed $sprite of kind $kinds"
    //% draggableParameters="reporter"
    //% kinds.shadow=multi_events_spriteKinds
    //% help=sprites/on-destroyed
    //% weight=90
    //% group=Local
    //% handlerStatement=1
    export function onDestroyedLocal(kinds: number[], handler: (sprite: Sprite) => void): void {
        onDestroyed(kinds, handler);
    }

    //% blockId=multi_events_onOverlapLocal
    //% block="on $sprite of kind $kinds overlaps $otherSprite of kind $otherKinds"
    //% draggableParameters="reporter"
    //% kinds.shadow=multi_events_spriteKinds
    //% otherKinds.shadow=multi_events_spriteKinds
    //% help=sprites/on-overlap
    //% weight=80
    //% group=Local
    //% handlerStatement=1
    export function onOverlapLocal(kinds: number[], otherKinds: number[], handler: (sprite: Sprite, otherSprite: Sprite) => void) {
        onOverlap(kinds, otherKinds, handler)
    }

    //% blockId=multi_events_onOverlapTileLocal
    //% block="on $sprite of kind $kinds overlaps $tiles at $location"
    //% draggableParameters="reporter"
    //% kinds.shadow=multi_events_spriteKinds
    //% tiles.shadow=multi_events_tiles
    //% help=scene/on-overlap-tile
    //% weight=70
    //% group=Local
    //% handlerStatement=1
    export function onOverlapTileLocal(kinds: number[], tiles: Image[], handler: (sprite: Sprite, location: tiles.Location) => void) {
        onOverlapTile(kinds, tiles, handler);
    }

    //% blockId=multi_events_onHitWallLocal
    //% block="on $sprite of kind $kinds hits wall at $location"
    //% draggableParameters="reporter"
    //% kinds.shadow=multi_events_spriteKinds
    //% help=scene/on-hit-wall
    //% weight=60
    //% group=Local
    //% handlerStatement=1
    export function onHitWallLocal(kinds: number[], handler: (sprite: Sprite, location: tiles.Location) => void) {
        onHitWall(kinds, handler);
    }

    //% blockId=multi_events_spriteKinds
    //% block="$kind1||or $kind2 or $kind3 or $kind4 or $kind5 or $kind6 or $kind7 or $kind8 or $kind9"
    //% kind1.shadow=spritekind
    //% kind2.shadow=spritekind
    //% kind3.shadow=spritekind
    //% kind4.shadow=spritekind
    //% kind5.shadow=spritekind
    //% kind6.shadow=spritekind
    //% kind7.shadow=spritekind
    //% kind8.shadow=spritekind
    //% kind9.shadow=spritekind
    //% inlineInputMode=inline
    //% weight=1
    //% group=Arrays
    export function spriteKinds(
        kind1: number,
        kind2?: number,
        kind3?: number,
        kind4?: number,
        kind5?: number,
        kind6?: number,
        kind7?: number,
        kind8?: number,
        kind9?: number,
    ): number[] {
        const all = [
            kind1,
            kind2,
            kind3,
            kind4,
            kind5,
            kind6,
            kind7,
            kind8,
            kind9
        ].filter(k => k != undefined);

        return all;
    }

    //% blockId=multi_events_tiles
    //% block="$tile1||or $tile2 or $tile3 or $tile4 or $tile5 or $tile6 or $tile7 or $tile8 or $tile9"
    //% tile1.shadow=tileset_tile_picker
    //% tile2.shadow=tileset_tile_picker
    //% tile3.shadow=tileset_tile_picker
    //% tile4.shadow=tileset_tile_picker
    //% tile5.shadow=tileset_tile_picker
    //% tile6.shadow=tileset_tile_picker
    //% tile7.shadow=tileset_tile_picker
    //% tile8.shadow=tileset_tile_picker
    //% tile9.shadow=tileset_tile_picker
    //% inlineInputMode=inline
    //% weight=0
    //% group=Arrays
    export function tiles(
        tile1: Image,
        tile2?: Image,
        tile3?: Image,
        tile4?: Image,
        tile5?: Image,
        tile6?: Image,
        tile7?: Image,
        tile8?: Image,
        tile9?: Image,
    ): Image[] {
        const all = [
            tile1,
            tile2,
            tile3,
            tile4,
            tile5,
            tile6,
            tile7,
            tile8,
            tile9
        ].filter(t => !!t);

        return all;
    }
}