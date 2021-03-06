/**
 * The ULA Message type is used to
 * send messages (events) to ULA plugins.
 * The object is entirely dynamic, but it
 * does require a 'type' field, so the
 * plugins can recognize (or ignore) the
 * event.
 */
export declare class Message {
    private readonly _obj;
    constructor(obj: any);
    /**
     * The dynamic properties of the message
     * @return any
     */
    readonly properties: any;
    /**
     * Converts a this object to a json string
     * @return object
     */
    toJSON(): object;
}
