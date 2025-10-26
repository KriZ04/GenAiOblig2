using GenAiOblig2.Components;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddRazorComponents()
    .AddInteractiveServerComponents(); // hvis du bruker server-interaktivitet

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

// Hvis du har auth:
// app.UseAuthentication();
// app.UseAuthorization();

app.UseAntiforgery(); // <-- VIKTIG: før du mapper komponenter/endepunkter

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode(); // eller .AddInteractiveWebAssemblyRenderMode()

app.Run();
