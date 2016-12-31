export default {
    message: "test",
    nodes: { value : 0 },
    update() {
        this.nodes.value = this.nodes.value + 1
    }
}