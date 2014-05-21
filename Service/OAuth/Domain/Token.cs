namespace OAuth.Domain
{
    public class Token
    {
        // ReSharper disable InconsistentNaming
        public string access_token { get; set; }
        public string token_type { get; set; }
        public string expires_in { get; set; }
        // ReSharper restore InconsistentNaming
    }
}