namespace OAuth.Domain
{
    public class Response
    {
        // ReSharper disable InconsistentNaming
        public string access_token { get; set; }
        public string token_type { get; set; }
        public string expires_in { get; set; }
        public int status { get; set; }
        public string reason { get; set; }
        // ReSharper restore InconsistentNaming
    }
}