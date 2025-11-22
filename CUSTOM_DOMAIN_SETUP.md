# Custom Domain Setup Guide for Magic Braiding

Follow these steps to connect your custom domain to your Vercel deployment.

## Step 1: Purchase a Domain (if you don't have one)

### Recommended Domain Registrars:
- **Namecheap** - Easy to use, good prices (~$10-15/year)
- **Google Domains** - Simple interface (~$12/year)
- **GoDaddy** - Popular choice (~$12-15/year)
- **Cloudflare** - Best prices (~$8-10/year), includes free privacy

### Domain Suggestions:
- `magicbraiding.com`
- `magicbraidingtx.com`
- `magicbraids.com`
- `magicbraidsrichmond.com`

## Step 2: Add Domain to Vercel

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in and select your **Magic Braiding** project

2. **Open Project Settings**
   - Click **"Settings"** tab
   - Click **"Domains"** in the left sidebar

3. **Add Your Domain**
   - Enter your domain (e.g., `magicbraiding.com`)
   - Click **"Add"**
   - Vercel will show you DNS configuration instructions

## Step 3: Configure DNS Records

You'll need to add DNS records at your domain registrar. Vercel will show you exactly what to add.

### Option A: Root Domain (magicbraiding.com)

**Add these DNS records at your domain registrar:**

1. **A Record** (for root domain):
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Value:** `76.76.21.21`
   - **TTL:** Auto (or 3600)

2. **CNAME Record** (for www):
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `cname.vercel-dns.com.`
   - **TTL:** Auto (or 3600)

### Option B: Subdomain (www.magicbraiding.com)

**Add this DNS record:**

- **Type:** CNAME
- **Name:** www
- **Value:** `cname.vercel-dns.com.`
- **TTL:** Auto (or 3600)

## Step 4: Update DNS at Your Registrar

### If using Namecheap:
1. Log in to Namecheap
2. Go to **Domain List** → Click **Manage** next to your domain
3. Click **Advanced DNS** tab
4. Add the DNS records shown in Vercel
5. Click **Save**

### If using Google Domains:
1. Log in to Google Domains
2. Click on your domain
3. Go to **DNS** section
4. Add the DNS records
5. Click **Save**

### If using GoDaddy:
1. Log in to GoDaddy
2. Go to **My Products** → **DNS**
3. Add the DNS records
4. Click **Save**

### If using Cloudflare:
1. Log in to Cloudflare
2. Select your domain
3. Go to **DNS** → **Records**
4. Add the DNS records
5. Make sure proxy is **OFF** (gray cloud) for DNS records

## Step 5: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** for most domains
- You can check status at: [whatsmydns.net](https://www.whatsmydns.net)

## Step 6: Verify Domain in Vercel

1. Go back to Vercel → Settings → Domains
2. Wait for status to show **"Valid Configuration"**
3. Vercel will automatically issue SSL certificate (takes a few minutes)

## Step 7: Update Site Configuration (Optional)

After your domain is connected, you may want to update:

1. **Update sitemap.ts** - Change baseUrl to your custom domain
2. **Update robots.ts** - Change sitemap URL
3. **Update metadata** - Ensure all references use your custom domain

## Troubleshooting

### Domain shows "Invalid Configuration"
- Double-check DNS records are correct
- Make sure you copied the exact values from Vercel
- Wait a bit longer for DNS propagation
- Check DNS at [whatsmydns.net](https://www.whatsmydns.net)

### SSL Certificate not issued
- Wait 5-10 minutes after DNS propagation
- Make sure DNS records are correct
- Try removing and re-adding domain in Vercel

### Site not loading on custom domain
- Check DNS propagation status
- Verify DNS records are correct
- Clear browser cache
- Try incognito/private browsing mode

### "Domain already in use"
- The domain might be connected to another Vercel project
- Check other Vercel projects
- Remove domain from old project first

## Quick Checklist

- [ ] Domain purchased
- [ ] Domain added to Vercel project
- [ ] DNS records added at registrar
- [ ] Waited for DNS propagation (15-30 min)
- [ ] Domain shows "Valid Configuration" in Vercel
- [ ] SSL certificate issued (automatic)
- [ ] Site loads on custom domain
- [ ] Updated sitemap/robots if needed

## Need Help?

If you get stuck:
1. Check Vercel's domain documentation
2. Contact your domain registrar support
3. Check DNS propagation status
4. Verify DNS records match Vercel's instructions exactly

---

**Note:** Your site will still work on `your-site.vercel.app` even after adding a custom domain. Both URLs will work!

